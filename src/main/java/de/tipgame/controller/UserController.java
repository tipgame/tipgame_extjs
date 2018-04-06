package de.tipgame.controller;

import de.tipgame.data.User;
import de.tipgame.data.UserLoginData;
import de.tipgame.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
public class UserController {

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "user/register", produces = APPLICATION_JSON_VALUE)
    public void register(@RequestBody User user) {
        userRepository.save(user);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "user/login", produces = APPLICATION_JSON_VALUE)
    public HttpEntity<UserLoginData> login(@RequestBody UserLoginData userLogin) {
        User user = userRepository.findByUsername(userLogin.getUsername());
        String password = user.getPassword();
        userLogin.setId(user.getId());
        userLogin.setLoginAccepted(password.equalsIgnoreCase(userLogin.getPassword()));

        return new HttpEntity<UserLoginData>(userLogin);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value = "/user/all", produces = APPLICATION_JSON_VALUE)
    public HttpEntity<List<User>> getAllUser() {
        List<User> users = userRepository.findAll();

        return new HttpEntity<>(users);

    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value = "/user/{userId}", produces = APPLICATION_JSON_VALUE)
    public HttpEntity<User> getUserById(@PathVariable int userId) {
        User user = userRepository.findById(userId);

        return new HttpEntity<>(user);

    }
}
