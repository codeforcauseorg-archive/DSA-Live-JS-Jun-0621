let n = 11;
let arr = [1, 1];
let arr2 = [];
// edge case
if (n === 1) {
  console.log("1");
} else if (n === 2) {
  console.log("1\n1 1");
} else {
  console.log("1\n1 1");
  let string = "1";
  for (let idx = 0; idx < n - 2; idx++) {
    string = "1";
    for (let index = 0; index < arr.length - 1; index++) {
      let element = arr[index] + arr[index + 1]; // pair sum
      string += " " + element;
    }
    arr2 = [];
    for (let index = 0; index < arr.length - 1; index++) {
      let element = arr[index] + arr[index + 1];
      arr2.push(element);
    }
    arr2.push(1);
    arr2.unshift(1);
    arr = Array.from(arr2);
    //console.log(arr);
    string += " 1";
    console.log(string);
  }
}
