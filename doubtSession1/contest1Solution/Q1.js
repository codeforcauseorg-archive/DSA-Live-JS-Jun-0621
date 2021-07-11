let n = parseInt(input);
let row = 0;
while (row < n) {
  let ele = 1;
  while (ele <= row + 1) {
    process.stdout.write(ele + " ");
    ele++;
  }
  console.log("");
  row++;
}
