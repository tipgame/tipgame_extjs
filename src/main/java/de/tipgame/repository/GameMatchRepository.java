package de.tipgame.repository;

import de.tipgame.entity.GameMatchEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GameMatchRepository extends CrudRepository<GameMatchEntity, Integer> {
    List<GameMatchEntity> findAllByOrderByPrelimGroupAscKickOffAsc();
}
