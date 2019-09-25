import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Farm } from './farm.model'
import { Chicken } from './chicken.model'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl= 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getFarms(): Observable<Farm> {
    return this.http.get<Farm>(this.apiUrl + '/farms'); 
  }

  addFarm(): Observable<Farm> {
    return this.http.post<Farm>(this.apiUrl + '/farms', null);
  }

  getChickens(id): Observable<Farm> {
    return this.http.get<Farm>(this.apiUrl + '/farms/' + id +'/chickens'); 
  }

  addEggs(id): Observable<Chicken> {
    return this.http.post<Chicken>(this.apiUrl + '/chickens/' + id + '/eggs', null);
  }

  deleteChicken(id): Observable<Chicken> {
    return this.http.get<Chicken>(this.apiUrl + '/chickens/' + id);
  }

  addChicken(id): Observable<Farm> {
    return this.http.post<Farm>(this.apiUrl + '/farms/' + id +'/chickens', null);
  }
}
