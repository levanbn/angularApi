import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { RateWindowComponent } from './components/rate-window/rate-window.component';
import { RatedMoviesComponent } from './components/rated-movies/rated-movies.component';
import { ResultComponent } from './components/result/result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BigNumberPipe } from './pipes/bigNumber.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SearchsComponent } from './components/searchs/searchs.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RateWindowComponent,
    RatedMoviesComponent,
    ResultComponent,
    BigNumberPipe,
    HomeComponent,
    SearchsComponent,
    AddMovieComponent,
  ],
  imports: [   BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
