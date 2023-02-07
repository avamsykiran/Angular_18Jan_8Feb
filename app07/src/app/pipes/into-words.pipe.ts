import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoWords'
})
export class IntoWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      'ZERO',
      'ONE','TWO','THREE',
      'FOUR','FIVE','SIX',
      'SEVEN','EIGHT','NINE'
    ];
  }

  transform(value: number): string {
    let str='';

    let strValue = `${value}`;

    for(let i=0;i<strValue.length;i++){
      if(strValue[i]=='.'){
        str = `${str} dot`;
      }else{
        str = `${str} ${this.digits[parseInt(strValue[i])]}`;
      }
    }

    return str;
  }

}
