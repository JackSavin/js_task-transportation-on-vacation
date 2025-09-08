/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40;

  if (days < 3) {
    return days * cost;
  }

  if (days >= 7) {
    return days * cost - 50;
  }

  return days * cost - 20;
}

module.exports = calculateRentalCost;
