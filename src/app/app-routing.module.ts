import { SearchsComponent } from './components/searchs/searchs.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { RatedMoviesComponent } from './components/rated-movies/rated-movies.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'searchs',
    component: SearchsComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'votes',
    component: RatedMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
