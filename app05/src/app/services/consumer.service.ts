import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from '../models/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl = "http://localhost:9999/consumers";
  }

  getAll(): Observable<Consumer[]> {
    return this.httpClient.get<Consumer[]>(this.apiUrl);
  }

  getById(id: number): Observable<Consumer> {
    return this.httpClient.get<Consumer>(this.apiUrl + "/" + id);
  }

  add(c: Consumer): Observable<Consumer> {
    return this.httpClient.post<Consumer>(this.apiUrl,c);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + "/" + id);
  }

  update(c: Consumer): Observable<Consumer> {
    return this.httpClient.put<Consumer>(this.apiUrl,c);
  }
}
