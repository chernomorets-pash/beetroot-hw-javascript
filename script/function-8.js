function seconds () {
    let hours = +prompt ("enter amount of hours: ");
    let minutes  = +prompt ("enter amount of minutes : ");
    let seconds  = +prompt ("enter amount of seconds : ");

    const hourInDay = 24;
    const secInHour = secInMin*minInHour;
    const secInDay = secInHour*hourInDay;
    let totalSec;
    return console.log(`Total seconds: ${(hours*secInHour)+(minutes*secInMin)+(seconds)}`);
}
seconds ();