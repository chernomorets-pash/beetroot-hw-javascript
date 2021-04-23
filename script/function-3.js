// function thirdNum () {
//     let a = prompt ("enter first num");
//     let b = prompt ("enter second num");
//     let c = prompt ("enter third num");
//     if (a == undefined && b == undefined && c == undefined) {
//         console.log('you miss the number, please enter all values')
//     } else {
//     let abc = a+b+c;
//     console.log (+abc);
//     }
// }

// thirdNum();

function thirdNum (a) {
    return function (b) {
        return function (c) {
            return  `${a}${b}${c}`
        }
    }
}

let plusThreeNums = thirdNum(1)(2)(3);
console.log(plusThreeNums);