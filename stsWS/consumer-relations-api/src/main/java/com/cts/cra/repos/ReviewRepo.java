package com.cts.cra.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cts.cra.entity.Review;

public interface ReviewRepo extends JpaRepository<Review, Long> {

	@Query("SELECT r FROM Review r WHERE r.reviewedBy.id=:cid")
	List<Review> getAllByConsumerId(Long cid);
}
