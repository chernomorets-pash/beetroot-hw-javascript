function dataDiff (d1h,d1m,d1s,d2h,d2m,d2s) {
    d1h = +prompt ('enter first date hours (0-24)');
    d1m = +prompt ('enter first date minutes (0-60)');
    d1s = +prompt ('enter first date seconds (0-60)');
    d2h = +prompt ('enter first date hours (0-24)');
    d2m = +prompt ('enter first date minutes (0-60)');
    d2s = +prompt ('enter first date seconds (0-60)');
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let dateOneSeconds = (d1h*3600)+(d1m*60)+d1s;
    let dateTwoSeconds = (d2h*3600)+(d2m*60)+d2s;
    console.log(`Total seconds in date one: ${dateOneSeconds}`);
    console.log(`Total seconds in date one: ${dateTwoSeconds}`);
    let diffInSec = 0;
    if (dateOneSeconds > dateTwoSeconds) {
        diffInSec = dateOneSeconds - dateTwoSeconds;
        console.log(`Date One is > Date Two for ${diffInSec}seconds`)
    } else {
        diffInSec = dateTwoSeconds - dateOneSeconds;
        console.log(`Date Two is > Date One for ${diffInSec}seconds`)
    }
    hours = diffInSec / 3600;
    minutes = diffInSec / 60 % 60;
    seconds = diffInSec % 60;
    console.log(`${Math.round(hours)}:${Math.round(minutes)}:${Math.round(seconds)}`);
}
dataDiff();
