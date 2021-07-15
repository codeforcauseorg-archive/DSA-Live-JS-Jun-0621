function Factorial(n){
    if(n==1){
        return 1;
    }

    let subPro = Factorial(n-1);
    return n*subPro;
}

console.log(Factorial(10));