function isValidDOB(dobInput) {
  let dob = new Date(dobInput);
  if (isNaN(dob)) return false;

  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;

  return (age > 17 && age < 36);
}