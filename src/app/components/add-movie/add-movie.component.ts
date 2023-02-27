import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs';
import { MovieApiService } from 'src/app/movie-api.service';
import { RegisterMovie, MovieType } from 'src/app/movie.model';
import { dateValidator, TakenNamesValidator } from 'src/app/app.validator';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  form: FormGroup<RegisterMovie> = this.buildForm();
  countryList = this.form.controls.movieCountries;
  premiereList = this.form.controls.moviePremierePlace;
  movieType = MovieType;
  isSubmitted: boolean = false;
  checkedGenres: string[] | null | undefined = [];

  constructor(private fb: FormBuilder, private api: MovieApiService) {}

  onSubmit() {
    this.isSubmitted = true;
    this.checkedGenres = this.form.value.movieGenre;
    this.api
      .saveMyMovie({
        movieName: this.form.value.movieName || null,
        movieType: this.form.value.movieType || null,
        seriesEpisodesNum: this.form.value.seriesEpisodesNum || null,
        movieRuntime: this.form.value.movieRuntime || null,
        movieReleaseDate: this.form.value.movieReleaseDate || null,
        movieCountries: this.form.value.movieCountries || [],
        moviePremierePlace: this.form.value.moviePremierePlace || [],
        movieRating: this.form.value.movieRating || null,
        movieGenre: this.checkedGenres || null,
      })
      .subscribe();
    this.api
      .getMyMovie()
      .pipe(
        map((movies) =>
          movies.map((movie) => {
            this.api.myMovieNames.push(movie.movieName);
          })
        )
      )
      .subscribe();
    console.log(this.form);
  }

  get CountriesLength() {
    return this.form.controls.movieCountries?.controls.length;
  }

  get PremieresLength() {
    return this.form.controls.moviePremierePlace?.controls.length;
  }

  private buildForm() {
    return this.fb.group<RegisterMovie>({
      movieName: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          new TakenNamesValidator(this.api).validate(),
        ],
        updateOn: 'blur',
      }),
      movieType: this.fb.control('Movie'),
      movieReleaseDate: this.fb.control('', {
        validators: [Validators.required, dateValidator()],
        updateOn: 'blur',
      }),
      movieGenre: this.fb.control([]),
      movieCountries: this.fb.array([this.fb.control('')]),
      moviePremierePlace: this.fb.array([this.fb.control('')]),
      movieRating: this.fb.control(0, {
        validators: [Validators.min(1)],
      }),
    });
  }

  private handleMovietype(x: any) {
    switch (x) {
      case 'Movie': {
        this.form.addControl(
          'movieRuntime',
          this.fb.control('', [
            Validators.required,
            Validators.min(60),
            Validators.max(180),
          ])
        );
        this.form.removeControl('seriesEpisodesNum');
        break;
      }
      case 'Series': {
        this.form.addControl(
          'seriesEpisodesNum',
          this.fb.control('', [Validators.required])
        );
        this.form.removeControl('movieRuntime');
        break;
      }
    }
  }

  addCountry() {
    if (this.CountriesLength === 5) {
      return;
    }
    this.countryList?.push(new FormControl(''));
  }

  removeCountry(index: number) {
    if (this.CountriesLength === 1) {
      return;
    }
    this.countryList?.removeAt(index);
  }

  addPremiere() {
    if (this.PremieresLength === 10) {
      return;
    }
    this.premiereList.push(new FormControl(''));
  }

  removePremiere(index: number) {
    if (this.PremieresLength === 1) {
      return;
    }
    this.premiereList?.removeAt(index);
  }

  ngOnInit() {
    this.handleMovietype(this.form.controls['movieType'].value);
    this.form.controls['movieType'].valueChanges.subscribe((x) => {
      this.handleMovietype(x);
    });
  }
}
