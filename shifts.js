function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hoursWorked, hourlyRate) {
  let pay;
  if (hoursWorked > 8) {
    const regular = 8 * hourlyRate;
    const overtime = (hoursWorked - 8) * hourlyRate * 1.5;
    pay = regular + overtime;
  } else {
    pay = hoursWorked * hourlyRate;
  }
  return Math.round(pay);
}


module.exports = { isValidShift, calculatePay };
