function thirdNum () {
    let a = prompt ("enter first num");
    let b = prompt ("enter second num");
    let c = prompt ("enter third num");
    if (a == -1 && b == -1 && c == -1) {
        console.log('you miss the number, please enter all values')
    } else {
    let abc = a+b+c;
    console.log (+abc);
    }
}

thrirdNum();