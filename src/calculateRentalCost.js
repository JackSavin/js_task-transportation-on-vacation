/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    return days * cost - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * cost - SHORT_DISCOUNT;
  }

  return days * cost;
}

module.exports = calculateRentalCost;
