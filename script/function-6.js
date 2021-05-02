function perfectNumSearcher(start, stop) {
    // start = +prompt ('enter start number: ');
    // finish = +prompt ('enter finish number: ');
    let s = 0;
    let perfects = [];
    for (let i = start; i <= stop; i++ ) {
        for (j = 1; j < i; j++) {
            if (i%j == 0) {
                s += j;
            }

            if (s == i) {
            console.log(i);
            perfects += i;
            }
        }
    }
    console.log(start, stop, s, perfects)
}
perfectNumSearcher(5,100);