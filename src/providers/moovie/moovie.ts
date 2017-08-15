import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  private api_key:string = "";


  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMoovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key="+ this.getApiKey());
  }
  
  getApiKey(): string{
    return this.api_key;
  }
}
