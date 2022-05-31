import { pointSystem } from "../db/pointSystem";

function calculatePrice(player) {
  const { position } = player;
  const points = 0;

  for (property in player) {
    if (Object.keys(pointSystem).includes(property)) {
      points = +player[property] * pointSystem[position][property];
    }
  }

  const fairPrice = points * 1000;

  return fairPrice;
}

export { calculatePrice };
