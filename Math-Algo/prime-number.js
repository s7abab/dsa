function prime(n) {
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(9));
