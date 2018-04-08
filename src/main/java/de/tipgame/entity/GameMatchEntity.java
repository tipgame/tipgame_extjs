package de.tipgame.entity;

import javax.persistence.*;

@Entity
@Table(name="game_match")
public class GameMatchEntity {

    private Integer gameMatchId;
    private String kickOff;
    private String homeTeamImage;
    private String homeTeamName;
    private String awayTeamImage;
    private String awayTeamName;
    private String prelimGroup;
    private String round;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer getGameMatchId() {
        return gameMatchId;
    }
    public void setGameMatchId(Integer gameMatchId) {
        this.gameMatchId = gameMatchId;
    }

    public String getKickOff() {
        return kickOff;
    }
    public void setKickOff(String kickOff) {
        this.kickOff = kickOff;
    }

    public String getHomeTeamImage() {
        return homeTeamImage;
    }
    public void setHomeTeamImage(String homeTeamImage) {
        this.homeTeamImage = homeTeamImage;
    }

    public String getHomeTeamName() {
        return homeTeamName;
    }
    public void setHomeTeamName(String homeTeamName) {
        this.homeTeamName = homeTeamName;
    }

    public String getAwayTeamImage() {
        return awayTeamImage;
    }
    public void setAwayTeamImage(String awayTeamImage) {
        this.awayTeamImage = awayTeamImage;
    }

    public String getAwayTeamName() {
        return awayTeamName;
    }
    public void setAwayTeamName(String awayTeamName) {
        this.awayTeamName = awayTeamName;
    }

    public String getPrelimGroup() {
        return prelimGroup;
    }
    public void setPrelimGroup(String prelimGroup) {
        this.prelimGroup = prelimGroup;
    }

    public String getRound() {
        return round;
    }
    public void setRound(String round) {
        this.round = round;
    }
}
