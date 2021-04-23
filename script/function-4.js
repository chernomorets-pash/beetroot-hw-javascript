function rectangle (a,b) {
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
a = +prompt ("legngth: ");
b = +prompt ("width: ");
rectangle ();