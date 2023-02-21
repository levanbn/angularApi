import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country, movieInDetails} from 'src/app/movie.model'
import { concat, forkJoin, map, Observable, reduce, switchMap } from 'rxjs';
import { MovieApiService } from 'src/app/movie-api.service';
@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss']
})
export class SearchsComponent implements OnInit {
  first = new FormControl();
  second = new FormControl();
  third = new FormControl();
  firstMovie$: Observable<movieInDetails> | undefined;
  secondMovie$: Observable<movieInDetails> | undefined;
  thirdMovie$: Observable<movieInDetails> | undefined;
  country$: Observable<Country> | undefined;
  population$: Observable<number> | undefined;

  minutesLength$: Observable<number> | undefined;

  constructor(private api: MovieApiService ) {}

  ngOnInit(): void {}

  send() {
    this.firstMovie$ = this.api.getMovieDetails(this.first.value);
    this.secondMovie$ = this.api.getMovieDetails(this.second.value);
    this.thirdMovie$ = this.api.getMovieDetails(this.third.value);
    this.minutesLength$ = concat(
      this.firstMovie$,
      this.secondMovie$,
      this.thirdMovie$
    ).pipe(
      map((x) => Number(x.Runtime.split(' ')[0])),
      reduce((acc, curr) => acc + curr, 0)
    );
    this.country$ = concat(
      this.firstMovie$,
      this.secondMovie$,
      this.thirdMovie$
    ).pipe(switchMap((x) => this.api.getCountyDetails(x.Country)));
    this.population$ = this.country$.pipe(map((x) => x[0].population));
    this.population$.pipe(reduce((acc, curr) => acc + curr, 0));
  }
}
