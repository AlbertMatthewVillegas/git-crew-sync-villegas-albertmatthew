function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hoursWorked, hourlyRate) {
  const pay = hoursWorked * hourlyRate;
  return Math.round(pay);
}

module.exports = { isValidShift, calculatePay };
