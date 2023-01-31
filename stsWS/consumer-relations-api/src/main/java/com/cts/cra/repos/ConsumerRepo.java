package com.cts.cra.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.cra.entity.Consumer;

public interface ConsumerRepo extends JpaRepository<Consumer, Long> {

}
