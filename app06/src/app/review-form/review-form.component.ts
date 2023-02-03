import { Component,EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  reviewForm:FormGroup;

  rid:FormControl;
  prd:FormControl;
  cmts:FormControl;

  @Output()
  save:EventEmitter<Review>;

  constructor(){
    this.rid=new FormControl(0);
    this.prd=new FormControl('',[Validators.required]);
    this.cmts=new FormControl('',[Validators.required]);

    this.reviewForm=new FormGroup({reviewId:this.rid,product:this.prd,comments:this.cmts});

    this.save=new EventEmitter<Review>();
  }

  formSubmitted(){
    this.save.emit(this.reviewForm.value);
    this.reviewForm.reset({reviewId:0,product:'',comments:''});
  }

}
