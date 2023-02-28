import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { RatedMoviesComponent } from './components/rated-movies/rated-movies.component';
import { ResultComponent } from './components/result/result.component';
import { PlanMovieComponent } from './components/plan-movie/plan-movie.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search movie',
    component: InputComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'votes',
    component: RatedMoviesComponent,
  },
  {
    path: 'movie plan',
    component: PlanMovieComponent,
  },
  {
    path: 'my movies',
    component: MyMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
