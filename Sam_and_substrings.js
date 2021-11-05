// 42 => 4 + 2 + 42 = 48

function substrings(n) {
  let sum = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j <= n.length; j++) {
      sum.push(parseInt(n.substring(i, j)));
    }
  }
  console.log(sum.reduce((a, b) => a + b));
}

substrings("48");
