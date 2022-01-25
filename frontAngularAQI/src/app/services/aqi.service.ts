import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AqiService {

  constructor(private http: HttpClient) { }

  listAQIBackend(){
    const urlAPIAQI = "http://localhost:3030/aqi";
    return this.http.get(urlAPIAQI) //promesas
  }
}
