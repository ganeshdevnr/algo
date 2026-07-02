/* Linear search should fail the test */
/* export default function twoCrystalBalls(breaks: boolean[]): number {
  let i = 0;

  for (; i < breaks.length - 1; ++i) {
    if (breaks[i]) {
      break;
    }
  }

  if (i === breaks.length - 1 && breaks[i] === false) return -1;

  // if no floors break, what happens? i
  return i > breaks.length - 1 ? -1 : i;
} */

export default function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = 0;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) break;
  }

  i -= jumpAmount;

  for (let j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) return i;
  }

  // if the balls didn't break
  return -1;
}
