package com.playconnect.controller;



import com.playconnect.model.MatchParticipant;
import com.playconnect.model.User;
import com.playconnect.repository.MatchParticipantRepository;
import com.playconnect.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import com.playconnect.model.Match;
import com.playconnect.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin(origins = "*")
public class MatchController {

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
private MatchParticipantRepository participantRepository;

@Autowired
private UserRepository userRepository;
public static class JoinRequest {
    public Long userId;
}

    // Create Match
    @PostMapping
    public Match createMatch(@RequestBody Match match) {
        return matchRepository.save(match);
    }

    // Get All Matches
    @GetMapping
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    // Get Match By ID
    @GetMapping("/{id}")
    public Optional<Match> getMatchById(@PathVariable Long id) {
        return matchRepository.findById(id);
    }

    @PostMapping("/{id}/join")
public ResponseEntity<?> joinMatch(
        @PathVariable Long id,
        @RequestBody JoinRequest request) {

    Match match = matchRepository.findById(id).orElse(null);

    if (match == null) {
        return ResponseEntity.badRequest()
                .body("Match not found");
    }

    User user = userRepository.findById(request.userId)
            .orElse(null);

    if (user == null) {
        return ResponseEntity.badRequest()
                .body("User not found");
    }

    boolean alreadyJoined =
            participantRepository.existsByMatchIdAndUserId(
                    id,
                    request.userId
            );

    if (alreadyJoined) {
        return ResponseEntity.badRequest()
                .body("Already joined this match");
    }

    MatchParticipant participant =
            new MatchParticipant();

    participant.setMatchId(id);
    participant.setUserId(request.userId);

    participantRepository.save(participant);

    match.setCurrentPlayers(
            match.getCurrentPlayers() + 1
    );

    matchRepository.save(match);

    return ResponseEntity.ok("Joined Successfully");
}
}