import { Player } from "../models/Player"

export const getAllUsers = async(query) => {
    if (Object.keys(query).length === 0) {
        const player = await Player.find();
        console.log(player);
         return ;
    };

const {
    age,
    nation,
    league,
    team,
    goals_selection,
    selections_nation,
    position,
    price,
    goal_champ,
    assist_champ,
    own_goal_champ,
    yellow_card_champ,
    second_yellow_card_champ,
    red_card_champ,
    goal_continent,
    assist_continent,
    own_goal_continent,
    yellow_card_continent,
    second_yellow_card_continent,
    red_card_continent,
    goal_cup,
    assist_cup,
    own_goal_cup,
    yellow_card_cup,
    second_yellow_card_cup,
    red_card_cup
 } = query

    const playerFilter = {};

    if (age) {
        playerFilter.age = age;
    };

    if (nation) {
        playerFilter.nation = nation;
    };

    if (league) {
        playerFilter.league = league;
    };

    if (team) {
        playerFilter.team = team;
    };

    if (goals_selection) {
        playerFilter.selection = selection;
    };

    if (selections_nation) {
        playerFilter.nation = nation; 
    };

    if (position) {
        playerFiter.position = position;
    };

    if (price) {
         playerFilter.price = price;
    };

    if (goal_champ) {
         playerFilter.goal_champ = goal_champ;
    };

    if (assist_champ) {
         playerFilter.assist_champ =  assist_champ;
    };

    if (own_goal_champ) {
         playerFilter.own_goal_champ = own_goal_champ;
    };

    if (yellow_card_champ) {
         playerFilter.yellow_card_champ = yellow_card_champ;
    };

    if (second_yellow_card_champ) {
         playerTeam.second_yellow_card_champ = second_yellow_card_champ
    };

    if (red_card_champ) {
         playerTeam.red_card_champ = red_card_champ;
    };

    if (goal_continent) {
        playerTeam.goal_continent = goal_continent;
    };

    if (assist_continent) {
        playerFilter.assist_continent = assist_continent;
    };

    if (own_goal_continent) {
        playerFilter.own_goal_continent = own_goal_continent;
    };

    if (goal_cup) {
        playerFilter.goal_cup = goal_cup;
    };

    if (assist_cup) {
        playerFilter.assist_cup = assist_cup;
    };

    if (yellow_card_cup) {
        playerFilter.yellow_card_cup = yellow_card_cup;
    };

    if (second_yellow_card_cup) {
        playerTeam.second_yellow_card_cup = second_yellow_card_cup
    };

    if (red_card_cup) {
        playerTeam.red_card_cup = red_card_cup;
    };

    if (own_goal_cup) {
        playerFilter.own_goal_continent = own_goal_continent;
    };

    if (yellow_card_cup) {
        playerFilter.yellow_card_continent = yellow_card_continent;
    };

    if (second_yellow_card_cup) {
        playerFilter.second_yellow_card_continent = second_yellow_card_continent;
    };

    if (red_card_cup) {
        playerFilter.red_card_continent = red_card_continent;
    };

    return await Player.find(playerFilter)
}