let n = 3;
let row = 0;
while (row < n) {
  let col = 0;
  let colMirror = 0;
  while (colMirror < 2 * n - 1) {
    // daigonal or dash
    if (
      row + col === n - 1 ||
      (row === parseInt(n / 2) && col >= parseInt(n / 2))
    ) {
      process.stdout.write("  *");
    } else {
      process.stdout.write("   ");
    }
    colMirror++;
    if (colMirror < n) {
      col++;
    } else {
      col--;
    }
  }
  console.log("");
  row++;
}
