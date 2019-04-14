export default function (email) {
  const errors = {};
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return true;
  }
  errors.email = 'Invalid email address';
  return false;
}
