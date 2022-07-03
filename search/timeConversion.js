function timeConversion(s) {
  var newTime = '';
  var isPM = s.includes('PM');
  if (isPM) {
    let timeArray = s.replace('PM', '').split(':');
    timeArray[0] = (timeArray[0] != '12') ? parseInt(timeArray[0]) + 12 : timeArray[0];
    newTime = `${timeArray[0]}:${timeArray[1]}:${timeArray[2]}`
  } else {
    let timeArray = s.replace('AM', '').split(':');
    timeArray[0] = (timeArray[0] != '12') ? timeArray[0] : '00';
    newTime = `${timeArray[0]}:${timeArray[1]}:${timeArray[2]}`
  }

  return newTime;

}





console.log(timeConversion('07:05:45PM'));
// console.log(timeConversion('12:01:00AM'));
// console.log(timeConversion('12:01:00PM'));
//19:05:45