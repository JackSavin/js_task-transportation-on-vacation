/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const basePrise = DAILY_RATE * days;

  if (days >= LONG_TERM) {
    return basePrise - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrise - SHORT_DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
