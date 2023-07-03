import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private BASE_URL: string = environment.apiUrl;

  constructor(private http: HttpClient){}


  getdata() : Observable<Object>{
    return this.http.get(`${this.BASE_URL}`) ;
  }
}
