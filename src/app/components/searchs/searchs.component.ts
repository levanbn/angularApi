import { result } from './../../movie.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country, movieInDetails } from 'src/app/movie.model';
import {
  concat,
  tap,
  forkJoin,
  map,
  Observable,
  reduce,
  switchMap,
  of
} from 'rxjs';
import { MovieApiService } from 'src/app/movie-api.service';
@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss'],
})
export class SearchsComponent implements OnInit {
  first: string = '';
  second: string = '';
  third: string = '';
  firstMovie$: Observable<result> | undefined;
  secondMovie$: Observable<result> | undefined;
  thirdMovie$: Observable<result> | undefined;
  country$: Observable<Country> | undefined;
  population$: Observable<number> | undefined;
  minutesLength$: Observable<number> | undefined;
  constructor(private api: MovieApiService) {}

  ngOnInit(): void {}

  send() {
    const movieObservables = [this.first, this.second, this.third].map(
      (title) =>
        this.api
          .movieSearch(title)
          .pipe(map((result) => result.Search[0].imdbID))
    );

      forkJoin(movieObservables)
        .pipe(
          switchMap((imdbIds) => this.api.getMovieDetailsForIds(imdbIds)),
          map((movies) => movies.map((movie) => Number(movie.Runtime.split(' ')[0]))),
          tap((value) => console.log(`Received value: ${value}`)),
          reduce((acc, curr) => acc + curr, 0),
        )
        .subscribe((details) => {
          console.log(details);
        });

        const movieObservables2 = [this.first, this.second, this.third].map(
          (title) =>
            this.api
              .movieSearch(title)
              .pipe(map((result) => result.Search[0].imdbID))
        );
        forkJoin(movieObservables2)
        .pipe(
          switchMap((imdbIds) => this.api.getMovieDetailsForIds(imdbIds)),
          map((movies) => movies.map((movie) => movie.Country)),
          switchMap((country) => this.api.getCountyDetails(country)),
          map((country) =>  country.population)),
          reduce((acc, curr) => acc + curr, 0),
          tap((value) => console.log(`Received value: ${value}`)),
        )
        .subscribe((details) => {
          console.log(details);
        });

  }
}
