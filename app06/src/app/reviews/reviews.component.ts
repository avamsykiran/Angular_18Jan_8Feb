import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consumer } from '../models/consumer';
import { Review } from '../models/review';
import { ConsumerService } from '../services/consumer.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  consumer!: Consumer;
  reviews!: Review[];
  errMsg!: string;

  constructor(
    private consumerService: ConsumerService,
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let cid = this.activatedRoute.snapshot.params["id"];
    if (cid) {
      this.consumerService.getById(cid).subscribe({
        next: consumer => { this.consumer = consumer; this.loadReviews(); },
        error: err => { console.log(err); this.errMsg = "Unable to load consumer details,Please retry later"; }
      });
    }
  }

  loadReviews() {
    this.reviewService.getAllReviewOf(this.consumer.id).subscribe({
      next: reviews => this.reviews = reviews,
      error: err => { console.log(err); this.errMsg = "Unable to load reviews,Please retry later!" }
    })
  }
}
