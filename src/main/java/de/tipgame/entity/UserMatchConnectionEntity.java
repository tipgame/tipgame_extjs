package de.tipgame.entity;


import javax.persistence.*;

@Entity
@Table(name="UserMatchConnection")
public class UserMatchConnectionEntity {

    private Integer id;
    private Integer gameMatchId;
    private Integer userId;
    private String resultTippHomeTeam;
    private String resultTippAwayTeam;
    private Boolean alreadyProcessed;
    private String round;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGameMatchId() {
        return gameMatchId;
    }
    public void setGameMatchId(Integer integer) {
        this.gameMatchId = integer;
    }

    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getResultTippHomeTeam() {
        return resultTippHomeTeam;
    }
    public void setResultTippHomeTeam(String resultTippHomeTeam) {
        this.resultTippHomeTeam = resultTippHomeTeam;
    }

    public String getResultTippAwayTeam() {
        return resultTippAwayTeam;
    }
    public void setResultTippAwayTeam(String resultTippAwayTeam) {
        this.resultTippAwayTeam = resultTippAwayTeam;
    }

    public Boolean getAlreadyProcessed() {
        return alreadyProcessed;
    }
    public void setAlreadyProcessed(Boolean alreadyProcessed) {
        this.alreadyProcessed = alreadyProcessed;
    }

    public String getRound() {
        return round;
    }
    public void setRound(String round) {
        this.round = round;
    }
}
