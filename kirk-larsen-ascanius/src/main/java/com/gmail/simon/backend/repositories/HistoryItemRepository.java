package com.gmail.simon.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gmail.simon.backend.data.entity.HistoryItem;

public interface HistoryItemRepository extends JpaRepository<HistoryItem, Long> {
}
