import { pointSystem } from "../db/pointSystem";

function calculatePrice(player) {
  const { position } = player;
  const points = 0;

  console.log(player);
  for (property in player) {
    if (Object.keys(pointSystem).includes(property)) {
      points = +player[property] * pointSystem[position][property];
    }
  }

  const fairPrice = points * 1000;

  return fairPrice;
}

export { calculatePrice };
