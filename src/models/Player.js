import { Schema, model } from "mongoose";
// import { calculatePrice } from "../utils/calculatePrice";

const PlayerSchema = new Schema({
  red_card_continent: {
    type: Number,
    default: 0,
  },
  age: {
    type: Number,
    default: 0,
  },
  nation: {
    type: String,
    required: [true, "Nation is required."],
  },
  league: {
    type: String,
    required: [true, "League is required."],
  },
  team: {
    type: String,
    required: [true, "Team is required."],
  },
  goals_selection: {
    type: Number,
    default: 0,
  },
  selections_nation: {
    type: Number,
    default: 0,
  },
  position: {
    type: String,
    required: [true, "Position is required."],
  },
  price: {
    type: Number,
    default: 0,
  },
  goal_champ: {
    type: Number,
    default: 0,
  },
  assist_champ: {
    type: Number,
    default: 0,
  },
  own_goal_champ: {
    type: Number,
    default: 0,
  },
  yellow_card_champ: {
    type: Number,
    default: 0,
  },
  second_yellow_card_champ: {
    type: Number,
    default: 0,
  },
  red_card_champ: {
    type: Number,
    default: 0,
  },
  goal_cup: {
    type: Number,
    default: 0,
  },
  assist_cup: {
    type: Number,
    default: 0,
  },
  own_goal_cup: {
    type: Number,
    default: 0,
  },
  yellow_card_cup: {
    type: Number,
    default: 0,
  },
  second_yellow_card_cup: {
    type: Number,
    default: 0,
  },
  red_card_cup: {
    type: Number,
    default: 0,
  },
  goal_continent: {
    type: Number,
    default: 0,
  },
  assist_continent: {
    type: Number,
    default: 0,
  },
  own_goal_continent: {
    type: Number,
    default: 0,
  },
  yellow_card_continent: {
    type: Number,
    default: 0,
  },
  second_yellow_card_continent: {
    type: Number,
    default: 0,
  },
  fairPrice: {
    type: Number,
    default: 0,
    required: true,
  },
});

// PlayerSchema.pre("update", function (next, docs) {
//   const fairPrice = calculatePrice(docs.toObject({ getters: true }));
//   this.update({}, { $set: { fairPrice } });
// });

// PlayerSchema.pre("insertMany", function () {
//   console.log(this._id);
//   const fairPrice = calculatePrice(this._doc);
//   this.update({}, { $set: { fairPrice } });
// });

// PlayerSchema.pre("save", function () {
//   const fairPrice = calculatePrice(this);
//   this.update({}, { $set: { fairPrice } });
// });

export const Player = model("Player", PlayerSchema);
