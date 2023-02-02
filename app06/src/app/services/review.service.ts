import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl = "http://localhost:9999/reviews";
  }

  getAllReviewOf(cid:number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.apiUrl + "/byConsumer/"+cid);
  }

  getById(id: number): Observable<Review> {
    return this.httpClient.get<Review>(this.apiUrl + "/" + id);
  }

  add(r:Review): Observable<Review> {
    return this.httpClient.post<Review>(this.apiUrl,r);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + "/" + id);
  }

  update(r:Review): Observable<Review> {
    return this.httpClient.put<Review>(this.apiUrl,r);
  }
}
