function numPad(input, numStr, arr){
    if(input===""){
        console.log(numStr);
        return;
    }

    let ind = parseInt(input[0]);
    let modInput = input.substring(1);

    let str = arr[ind];

    for(let ch of str){
        let newNumStr = numStr+ch;
        numPad(modInput, newNumStr, arr);
    }
}


let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
numPad("22", "", arr);