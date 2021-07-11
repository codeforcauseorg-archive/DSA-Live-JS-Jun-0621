let n = 8;
let row = 0;
while (row < n) {
  let col = 0;
  while (col < n) {
    if ((row + col) % 2 === 0) {
      process.stdout.write(" *");
    } else {
      process.stdout.write("  ");
    }
    col++;
  }
  console.log();
  row++;
}
