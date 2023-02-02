package com.cts.cra.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reviews")
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long reviewId;
	private String product;
	private String comments;

	@ManyToOne
	private Consumer reviewedBy;

	public Review() {
		// TODO Auto-generated constructor stub
	}

	public Review(Long reviewId, String product, String comments, Consumer reviewdBy) {
		super();
		this.reviewId = reviewId;
		this.product = product;
		this.comments = comments;
		this.reviewedBy = reviewdBy;
	}

	public Long getReviewId() {
		return reviewId;
	}

	public void setReviewId(Long reviewId) {
		this.reviewId = reviewId;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Consumer getReviewdBy() {
		return reviewedBy;
	}

	public void setReviewdBy(Consumer reviewdBy) {
		this.reviewedBy = reviewdBy;
	}
}
