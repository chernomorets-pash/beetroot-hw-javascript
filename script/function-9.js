function seconds (sec) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let remain = 0;
    sec = +prompt ('enter amount of seconds: ');
    if (sec <= 86400) {
        hours = sec / 3600;
        minutes = sec / 60 % 60;
        seconds = sec % 60;
        console.log(`${Math.round(hours)}:${Math.round(minutes)}:${Math.round(seconds)}`);
    }else {
        console.log('it is more then one day');
    }
    }

seconds();