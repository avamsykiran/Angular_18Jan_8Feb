package com.cts.cra.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.cra.entity.Review;
import com.cts.cra.repos.ConsumerRepo;
import com.cts.cra.repos.ReviewRepo;

@RestController
@CrossOrigin
@RequestMapping("/reviews")
public class ReviewsApi {

	@Autowired
	private ReviewRepo reviewRepo;

	@GetMapping("/byConsumer/{cid}")
	public ResponseEntity<List<Review>> getAll(@PathVariable("cid") Long cid) {
		return ResponseEntity.ok(reviewRepo.getAllByConsumerId(cid));
	}

	@GetMapping("/{rid}")
	public ResponseEntity<Review> getById(@PathVariable("rid") Long rid) {
		return reviewRepo.existsById(rid) ? ResponseEntity.ok(reviewRepo.findById(rid).get())
				: ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{rid}")
	public ResponseEntity<Void> deleteById(@PathVariable("rid") Long rid) {
		ResponseEntity<Void> result = null;
		if (reviewRepo.existsById(rid)) {
			reviewRepo.deleteById(rid);
			result = new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			result = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return result;
	}

	@PostMapping
	public ResponseEntity<Review> add(@RequestBody Review review ){
		return review.getReviewId()!=null && reviewRepo.existsById(review.getReviewId()) ?
				new ResponseEntity<Review>(HttpStatus.BAD_REQUEST):
					new ResponseEntity<Review>(reviewRepo.save(review),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<Review> update(@RequestBody Review review ){
		return review.getReviewId()!=null || !reviewRepo.existsById(review.getReviewId()) ?
				new ResponseEntity<Review>(HttpStatus.BAD_REQUEST):
					new ResponseEntity<Review>(reviewRepo.save(review),HttpStatus.ACCEPTED);
	}
}
