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

import com.cts.cra.entity.Consumer;
import com.cts.cra.repos.ConsumerRepo;

@RestController
@RequestMapping("/consumers")
@CrossOrigin
public class ConsumerApi {

	@Autowired
	private ConsumerRepo consumerRepo;
	
	@GetMapping
	public ResponseEntity<List<Consumer>> getAll(){
		return ResponseEntity.ok(consumerRepo.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Consumer> getById(@PathVariable("id") Long id){
		return consumerRepo.existsById(id)? 
				ResponseEntity.ok(consumerRepo.findById(id).get()) : 
					ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
		ResponseEntity<Void> result=null;
		
		if(consumerRepo.existsById(id)) {
			consumerRepo.deleteById(id);
			result = new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}else {
			result = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		return result;
	}
	
	@PostMapping
	public ResponseEntity<Consumer> add(@RequestBody Consumer consumer){
		return consumer.getId()!=null && consumerRepo.existsById(consumer.getId())? 
				new ResponseEntity<Consumer>(HttpStatus.BAD_REQUEST) : 
					new ResponseEntity<Consumer>(consumerRepo.save(consumer),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<Consumer> update(@RequestBody Consumer consumer){
		return consumerRepo.existsById(consumer.getId())? 
					new ResponseEntity<Consumer>(consumerRepo.save(consumer),HttpStatus.ACCEPTED) :
						new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
