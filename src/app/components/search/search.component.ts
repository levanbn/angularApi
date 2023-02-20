import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { result } from 'src/app/movie.model';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchWord : string = "";
  searched : boolean = false;
  searchResult$: Observable<result> | undefined;
  constructor(private api: RequestService){}

 search(){
  this.searchResult$ = this.api.getRequest(this.searchWord);
  this.searched=true;
 }


}
