const pointSystem = {
  GoalKeeper: {
    saves: 10,
    ball_thefts: 0,
    goal_cup: 5,
    goal_champion: 10,
    goal_continent: 15,
    goals_selection: 20,
    assist_cup: 5,
    assist_champion: 10,
    assist_continent: 15,
    own_goal_cup: -80,
    own_goal_champion: -90,
    own_goal_continent: -100,
    yellow_card_cup: -50,
    yellow_card_champion: -50,
    yellow_card_continent: -50,
    second_yellow_card_cup: -50,
    second_yellow_card_champion: -50,
    second_yellow_card_continent: -50,
    red_card_cup: -100,
    red_card_champion: -100,
    red_card_continent: -100,
  },
  Defender: {
    saves: 0,
    ball_thefts: 80,
    goal_cup: 10,
    goal_champion: 20,
    goal_continent: 30,
    goals_selection: 40,
    assist_cup: 10,
    assist_champion: 20,
    assist_continent: 30,
    own_goal_cup: -80,
    own_goal_champion: -90,
    own_goal_continent: -100,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  LeftWinger: {
    saves: 0,
    ball_thefts: 80,
    goal_cup: 10,
    goal_champion: 20,
    goal_continent: 30,
    goals_selection: 40,
    assist_cup: 15,
    assist_champion: 30,
    assist_continent: 45,
    own_goal_cup: -80,
    own_goal_champion: -90,
    own_goal_continent: -100,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  RightWinger: {
    saves: 0,
    ball_thefts: 80,
    goal_cup: 10,
    goal_champion: 20,
    goal_continent: 30,
    goals_selection: 40,
    assist_cup: 15,
    assist_champion: 30,
    assist_continent: 45,
    own_goal_cup: -80,
    own_goal_champion: -90,
    own_goal_continent: -100,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  DefensiveMidfield: {
    saves: 0,
    ball_thefts: 60,
    goal_cup: 10,
    goal_champion: 20,
    goal_continent: 30,
    goals_selection: 40,
    assist_cup: 15,
    assist_champion: 30,
    assist_continent: 45,
    own_goal_cup: -50,
    own_goal_champion: -60,
    own_goal_continent: -70,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  LeftMidfield: {
    saves: 0,
    ball_thefts: 50,
    goal_cup: 20,
    goal_champion: 40,
    goal_continent: 60,
    goals_selection: 70,
    assist_cup: 30,
    assist_champion: 60,
    assist_continent: 90,
    own_goal_cup: -15,
    own_goal_champion: -30,
    own_goal_continent: -45,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  CentralMidfield: {
    saves: 0,
    ball_thefts: 50,
    goal_cup: 20,
    goal_champion: 40,
    goal_continent: 60,
    goals_selection: 70,
    assist_cup: 30,
    assist_champion: 60,
    assist_continent: 90,
    own_goal_cup: -15,
    own_goal_champion: -30,
    own_goal_continent: -45,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  RightMidfield: {
    saves: 0,
    ball_thefts: 50,
    goal_cup: 20,
    goal_champion: 40,
    goal_continent: 60,
    goals_selection: 70,
    assist_cup: 30,
    assist_champion: 60,
    assist_continent: 90,
    own_goal_cup: -15,
    own_goal_champion: -30,
    own_goal_continent: -45,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  AttackingMidfield: {
    saves: 0,
    ball_thefts: 30,
    goal_cup: 25,
    goal_champion: 50,
    goal_continent: 75,
    goals_selection: 85,
    assist_cup: 30,
    assist_champion: 60,
    assist_continent: 90,
    own_goal_cup: -10,
    own_goal_champion: -20,
    own_goal_continent: -30,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
  SecondStriker: {
    saves: 0,
    ball_thefts: 20,
    goal_cup: 30,
    goal_champion: 60,
    goal_continent: 90,
    goals_selection: 100,
    assist_cup: 20,
    assist_champion: 40,
    assist_continent: 60,
    own_goal_cup: -10,
    own_goal_champion: -20,
    own_goal_continent: -30,
    yellow_card_cup: -40,
    yellow_card_champion: -40,
    yellow_card_continent: -40,
    second_yellow_card_cup: -40,
    second_yellow_card_champion: -40,
    second_yellow_card_continent: -40,
    red_card_cup: -80,
    red_card_champion: -80,
    red_card_continent: -80,
  },
};

export { pointSystem };