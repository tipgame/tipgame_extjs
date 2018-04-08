package de.tipgame.service;

import de.tipgame.dtos.RegistrationDto;
import de.tipgame.entity.GameMatchEntity;
import de.tipgame.entity.UserEntity;
import de.tipgame.entity.UserMatchConnectionEntity;
import de.tipgame.repository.GameMatchRepository;
import de.tipgame.repository.UserMatchConnectionRepository;
import de.tipgame.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {


    private UserRepository userRepository;
    private ModelMapper modelMapper;
    private GameMatchRepository gameMatchRepository;
    private UserMatchConnectionRepository userMatchConnectionRepository;

    @Autowired
    public UserService(UserRepository userRepository,
                       GameMatchRepository gameMatchRepository,
                       UserMatchConnectionRepository userMatchConnectionRepository) {
        this.userRepository = userRepository;
        this.modelMapper = new ModelMapper();
        this.gameMatchRepository = gameMatchRepository;
        this.userMatchConnectionRepository = userMatchConnectionRepository;
    }

    public ResponseEntity registerUser(RegistrationDto registrationDto) {
        ResponseEntity responseEntity;
        if (!doesUserAlreadyExists(registrationDto)) {
            UserEntity user = modelMapper.map(registrationDto, UserEntity.class);
            userRepository.save(user);
            createMatchUserConnectionsForUser(user);
            responseEntity = new ResponseEntity(HttpStatus.OK);
        } else {
            responseEntity = new ResponseEntity(HttpStatus.CONFLICT);
        }

        return responseEntity;
    }

    private void createMatchUserConnectionsForUser(UserEntity user) {
        List<UserMatchConnectionEntity> userMatchConnections = new ArrayList<>();

        List<GameMatchEntity> matches = gameMatchRepository.findAllByOrderByPrelimGroupAscKickOffAsc();
        UserMatchConnectionEntity userMatchConnection = new UserMatchConnectionEntity();
        for (GameMatchEntity gameMatch : matches) {
            userMatchConnection.setGameMatchId(gameMatch.getGameMatchId());
            userMatchConnection.setUserId(user.getId());
            userMatchConnection.setResultTippAwayTeam("");
            userMatchConnection.setResultTippHomeTeam("");
            userMatchConnection.setAlreadyProcessed(false);
            userMatchConnection.setRound(gameMatch.getRound());
            userMatchConnections.add(userMatchConnection);
        }

        userMatchConnectionRepository.save(userMatchConnections);
    }

    private boolean doesUserAlreadyExists(RegistrationDto userRegistration)
    {
        return userRepository.findByUsername(userRegistration.getUsername()) != null;
    }
}
