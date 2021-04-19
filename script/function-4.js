function rectangle () {
    let a = +prompt ("legngth: ");
    let b = +prompt ("width: ");
    let s;
if (a != 0 && b != 0) {
    s = a*b;
    console.log("S = ", s);
}else if (a !=0 || b == undefined) {
    s = a*a;
    console.log("Square = ", s);
}else {
    console.log ("Wrong input!");
}
}
rectangle ();