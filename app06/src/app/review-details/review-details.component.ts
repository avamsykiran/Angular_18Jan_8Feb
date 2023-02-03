import { Component, Input } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent {

  @Input()
  review!:Review;

}
