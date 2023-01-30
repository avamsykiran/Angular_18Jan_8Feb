import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {

    const bgJob = (observer:Observer<number>) => {
      
      if(lb>ub) {
        observer.error("lower boudn exceds upper bound, and hence the series can not be generated.");
        return;
      }

      let current = lb;

      let handler = setInterval( () => {
        observer.next(current);
        current++;
        if(current > ub){
          clearInterval(handler);
          observer.complete();
        }
      }, 500);
    };

    return new Observable<number>(bgJob);
  }
}
