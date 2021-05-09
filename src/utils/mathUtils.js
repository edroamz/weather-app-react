function RoundNumber(number) {
  if (Number.isNaN(number)) return NaN;
  return Math.round(number);
}

export { RoundNumber };
