let n = 5;
let row = 0;
let rowMirror = 0;
while (rowMirror < 2 * n - 1) {
  let col = 0;
  let colMirror = 0;
  while (colMirror < 2 * n - 1) {
    process.stdout.write("(" + col + ", " + row + ")");
    colMirror++;
    if (colMirror < n) {
      col++;
    } else {
      col--;
    }
  }
  console.log("");
  rowMirror++;
  if (rowMirror < n) {
    row++;
  } else {
    row--;
  }
}
