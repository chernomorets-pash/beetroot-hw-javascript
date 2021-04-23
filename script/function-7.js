function timeFunct(h) {
    return function setMinutes(m = 0) {
      return function setSeconds(s = 0) {
        return `${h}:${m}:${s}`
      }
    }
  }
  
let time = timeFunct(22)()(11);
console.log(timeFunct);