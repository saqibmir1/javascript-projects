calculateTime = () => {
  var date = new Date();
  var dayNumber = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var seconds = date.getSeconds();
  var year = date.getYear();
  //var ampm = hour >= 12 ? 'PM' : 'AM';
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
/*
  hour = hour % 12;
  hour = hour ? hour : '12';
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
*/

  hour = hour < 10 ? '0' + hour : hour;
  minute= minute < 10 ? '0' + minute : minute;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.querySelector("#day").textContent = dayNames[dayNumber];
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#minute").textContent = minute;
  document.querySelector("#seconds").textContent = seconds;
  document.querySelector("#year").textContent = year + 1900;
  //document.querySelector("#ampm").textContent = ampm;

  setTimeout(calculateTime,200);
}

window.addEventListener('load', calculateTime)
