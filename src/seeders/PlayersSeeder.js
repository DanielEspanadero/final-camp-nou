import { Player } from "../models/Player";
import PlayerJson from "../db/train.json";

export const PlayerSeeder = async () => {
  const count = await Player.estimatedDocumentCount();

  if (count !== 0) return;

  Player.insertMany(PlayerJson);
};
