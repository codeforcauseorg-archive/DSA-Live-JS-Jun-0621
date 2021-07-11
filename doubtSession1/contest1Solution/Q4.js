const n = 1;
let row = 0;
let rowMirror = 0;
while (rowMirror < 2 * n - 1) {
  let col = 0;
  let colMirror = 0;
  while (colMirror < 2 * n - 1) {
    process.stdout.write("(" + col + ", " + row + ")");
    //process.stdout.write((n - Math.min(row, col)).toString() + " ");
    if (colMirror < n - 1) {
      col++;
    } else {
      col--;
    }
    colMirror++;
  }
  console.log("");
  if (rowMirror < n - 1) {
    row++;
  } else {
    row--;
  }
  rowMirror++;
}
