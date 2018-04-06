package de.tipgame.repository;

import de.tipgame.data.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer>{
    User findByUsername(String username);
    List<User> findAll();
    User findById(int id);
}
