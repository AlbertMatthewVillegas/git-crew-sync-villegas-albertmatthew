function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hoursWorked, hourlyRate) {
  if (hoursWorked > 8) {
    const regular = 8 * hourlyRate;
    const overtime = (hoursWorked - 8) * hourlyRate * 1.5;
    return regular + overtime;
  }
  return hoursWorked * hourlyRate;
}

module.exports = { isValidShift, calculatePay };
