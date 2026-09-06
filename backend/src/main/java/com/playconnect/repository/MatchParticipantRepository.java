package com.playconnect.repository;

import com.playconnect.model.MatchParticipant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchParticipantRepository
        extends JpaRepository<MatchParticipant, Long> {

    boolean existsByMatchIdAndUserId(
            Long matchId,
            Long userId
    );
}