import { Player } from "../models/Player";
import { getAllUsers } from "../services/playerService";

export const findPlayers = async (req, res) => {
  try {
    const players = await getAllUsers(req.query);

    return res.status(200).json(players);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

export const getOnePlayer = (req, res) => {
  try {
  } catch (error) {}
};
