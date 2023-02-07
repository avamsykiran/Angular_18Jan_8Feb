import { Component,EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnChanges {

  reviewForm:FormGroup;

  rid:FormControl;
  prd:FormControl;
  cmts:FormControl;

  @Input()
  review!:Review;

  @Output()
  save:EventEmitter<Review>;

  @Output()
  cancel:EventEmitter<number>;

  constructor(){
    this.rid=new FormControl(0);
    this.prd=new FormControl('',[Validators.required]);
    this.cmts=new FormControl('',[Validators.required]);

    this.reviewForm=new FormGroup({reviewId:this.rid,product:this.prd,comments:this.cmts});

    this.save=new EventEmitter<Review>();
    this.cancel=new EventEmitter<number>();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.review){
        this.reviewForm.reset(this.review);
      }
  }

  formSubmitted(){
    this.save.emit(this.reviewForm.value);
    this.reviewForm.reset({reviewId:0,product:'',comments:''});
  }

  doCancel(){
    this.cancel.emit(this.review.reviewId);
  }
}
