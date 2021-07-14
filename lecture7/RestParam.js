// console.log(1, 2, 4,6 , 7, 8, 9);


function restParam (a, ...rest){
    console.log(rest);
}


restParam(1);
restParam(1, 23);
restParam(1, 43, 54, 767);