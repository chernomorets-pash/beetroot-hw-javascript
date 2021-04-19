function timeFunct(h) {
    return function setMinutes(m = 0) {
      return function setSeconds(s = 0) {
        return `${h}:${m}:${s}`
      }
    }
  }
  
let time = timeFunct(24)()(59);
  console.log(time);