import { ThreeSearchComponent } from './components/three-search/three-search.component';
import { HomeComponent } from './components/home/home.component';
import { MyVoteComponent } from './components/my-vote/my-vote.component';
import { ResultComponent } from './components/result/result.component';
import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"result",
    component:ResultComponent,
  },
  {
    path:"myVote",
    component:MyVoteComponent,
  },
  {
    path:"threeSearch",
    component:ThreeSearchComponent,
  },
  {
    path:"search",
    component:SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
