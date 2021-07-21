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


function numPadOtp(input, numStr, arr, index){
    if(index===input.length){
        console.log(numStr);
        return;
    }

    let ind = parseInt(input[index]);

    let str = arr[ind];
    for(let ch of str){
        let newNumStr = numStr+ch;
        numPadOtp(input, newNumStr, arr, index+1);
    }
}


let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
// numPad("22", "", arr);
numPadOtp("23", "", arr, 0);