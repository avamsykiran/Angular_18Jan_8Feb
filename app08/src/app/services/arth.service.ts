import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  sum(n1:number,n2:number):number{
    return n1+n2;
  }

  product(n1:number,n2:number):number{
    return n1*n2;
  }
}
