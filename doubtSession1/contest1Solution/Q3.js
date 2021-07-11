const n = 9;
let row = 0;
while (row < n) {
  let col = 0;
  let colMirror = 0;
  while (colMirror < 2 * n - 1) {
    //process.stdout.write("(" + row + ", " + col + ")");
    if (
      row + col === n - 1 ||
      (row === parseInt(n / 2) && col > parseInt(n / 2))
    ) {
      process.stdout.write(" *");
    } else {
      process.stdout.write("  ");
    }
    if (colMirror < n - 1) {
      col++;
    } else {
      col--;
    }
    colMirror++;
  }
  console.log("");
  row++;
}
