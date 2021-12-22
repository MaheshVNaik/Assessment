import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1596c5e2a86d41708bf631eef04a3f6f";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1596c5e2a86d41708bf631eef04a3f6f";

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  techHeading():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
}
