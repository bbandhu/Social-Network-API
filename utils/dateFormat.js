const addLeadingZeroes = (n) => {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }
  
  const dateFormat = (date) => {
    let d = new Date(date),
        year = d.getFullYear(),
        month = addLeadingZeroes(d.getMonth() + 1), // months in JavaScript start from 0
        day = addLeadingZeroes(d.getDate()),
        hours = addLeadingZeroes(d.getHours()),
        mins = addLeadingZeroes(d.getMinutes()),
        secs = addLeadingZeroes(d.getSeconds());
  
    return year + "-" + month + "-" + day + " " + hours + ":" + mins + ":" + secs;
  };
  
  module.exports = dateFormat;