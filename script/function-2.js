function factorial(num) {
   let result = 1;
   if (num < 0) return;
   if (num === 1) return num;
   for (let i = 2; i <= num; i+=1){
       result *= i;
   }
   console.log(`Factorial number of it is: ${result}`);
}
factorial(3);


