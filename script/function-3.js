function thirdNum (a) {
    return function (b) {
        return function (c) {
            return  `${a}${b}${c}`
        }
    }
}

let plusThreeNums = thirdNum(1)(2)(3);
console.log(plusThreeNums);