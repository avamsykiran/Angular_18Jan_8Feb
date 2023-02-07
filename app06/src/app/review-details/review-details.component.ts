import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent {

  @Input()
  review!:Review;

  @Output()
  deleteBtnClick:EventEmitter<number>;

  @Output()
  editBtnClick:EventEmitter<number>;

  constructor(){
    this.deleteBtnClick=new EventEmitter<number>();
    this.editBtnClick=new EventEmitter<number>();
  }

  remove(){
    this.deleteBtnClick.emit(this.review.reviewId);
  }

  edit(){
    this.editBtnClick.emit(this.review.reviewId);
  }
}
