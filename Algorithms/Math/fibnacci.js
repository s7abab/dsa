function fib(n) {
  let f = [0, 1];
  for (let i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f;
}

console.log(fib(7));

// using recursion

function recFib(n, sum) {
  if (n < 2) return n;
  return recFib(n - 1) + recFib(n - 2);
}

console.log(recFib(6));
