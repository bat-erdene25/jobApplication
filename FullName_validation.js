function isValidFullName(nameInput) {
  if (nameInput.length < 6) return false;
  if (/\d/.test(nameInput)) return false; // contains digits
  return true;
}