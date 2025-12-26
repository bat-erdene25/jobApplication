function isValidSalary(salaryInput) {
  let salary = Number(salaryInput);
  if (isNaN(salary)) return false;
  return salary >= 0;
}