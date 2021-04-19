function isPerfect(n) {
    n = +prompt ("Enter your number to know is it perfect: ")
    let s = 0;
    let remain;

    for (let i =1; i < n - 1; i++){
        remain = n%i;
        if (remain === 0) {
            s += i;
        }
        
    }
        if (n === s) {
            console.log(`Number ${n} is perfect`);
        } else {
            console.log(`Number ${n} is NOT perfect`);
        }

  
}
isPerfect();

