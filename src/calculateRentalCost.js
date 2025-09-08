/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const longDiscount = 50;
  const shortDiscount = 20;

  if (days >= 7) {
    return days * cost - longDiscount;
  }

  if (days >= 3) {
    return days * cost - shortDiscount;
  }

  return days * cost;
}

module.exports = calculateRentalCost;
