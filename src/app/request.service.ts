import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { result } from './movie.model';

const API_BASE = 'https://www.omdbapi.com/?apikey=c10494d2';
const COUNTY_BASE = 'https://restcountries.com/';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}
  getRequest(searchWord:string):Observable<result>{
    return this.http.get<result>(`${API_BASE}&s=${searchWord}`)
  }
}
