package de.tipgame.controller;

import de.tipgame.dtos.LoginDto;
import de.tipgame.dtos.RegistrationDto;
import de.tipgame.dtos.UserDto;
import de.tipgame.entity.UserEntity;
import de.tipgame.repository.UserRepository;
import de.tipgame.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
public class UserController {

    private UserRepository userRepository;
    private ModelMapper modelMapper;
    private UserService userService;

    @Autowired
    public UserController(UserRepository userRepository,
                          UserService userService) {
        this.userRepository = userRepository;
        this.modelMapper = new ModelMapper();
        this.userService = userService;
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "user/register", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity register(@RequestBody RegistrationDto registrationDto) {
        return userService.registerUser(registrationDto);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "user/login", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> login(@RequestBody LoginDto userLogin) {
        ResponseEntity<UserDto> response;
        UserEntity userEntity = userRepository.findByUsername(userLogin.getUsername());

        if (userEntity != null && userEntity.getPassword().equalsIgnoreCase(userLogin.getPassword())) {
            UserDto user = modelMapper.map(userEntity, UserDto.class);
            response = new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            response = new ResponseEntity<UserDto>(HttpStatus.FORBIDDEN);
        }

        return response;
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value = "/user/all", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserDto>> getAllUser() {
        List<UserEntity> usersEntities = userRepository.findAll();

        List<UserDto> userDtos = usersEntities
                .stream()
                .map(userEntity -> modelMapper.map(userEntity, UserDto.class))
                .collect(Collectors.toList());
        return new ResponseEntity<>(userDtos, HttpStatus.OK);

    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value = "/user/{userId}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> getUserById(@PathVariable("userId") int userId) {
        UserEntity userEntity = userRepository.findById(userId);
        UserDto userDto = modelMapper.map(userEntity, UserDto.class);
        return new ResponseEntity(userDto, HttpStatus.OK);

    }
}
