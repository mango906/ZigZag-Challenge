let data = process.argv.slice(2);

if (data.length != 2) {
  console.log('입력 양식을 다시 확인해주세요.');
  process.exit();
}

/* 
  type: 0 time: 1 add time: 2  
*/

/* 
  hour: 0 min: 1 sec: 2 
*/
let time = data[1].split(':');

const timeFormat = time => {
  if (time < 10) return `0${time}`;
  return time;
};

const invalidCheck = (() => {
  /* format check */
  if (data.length !== 3) {
    console.log('입력 양식을 다시 확인해주세요.');
    process.exit();
  }

  /* time check */
  if (time.length !== 3) {
    console.log('입력 양식을 다시 확인해주세요.');
    process.exit();
  }

  /* type check */
  const type = data[0];
  if (type !== 'AM' && type !== 'PM') {
    console.log('입력 양식을 다시 확인해주세요.');
    process.exit();
  }

  /* time length check */
  time.forEach(time => {
    if (time.length !== 2) {
      console.log('입력 양식을 다시 확인해주세요.');
      process.exit();
    }
  });

  /* time range & number check */
  let timeChk = '';
  time.forEach((time, i) => {
    timeChk += time;
  });

  if (timeChk <= 120000 === false) {
    console.log('timeChk', timeChk);
    console.log('입력 양식을 다시 확인해주세요.');
    process.exit();
  }

  /* plus time range check */
  if (!(data[2] >= 0 && data[2] <= 200000)) {
    console.log('입력 양식을 다시 확인해주세요.');
    process.exit();
  }
})();

let hour = Math.floor(data[2] / 3600);
let min = Math.floor((data[2] % 3600) / 60);
let sec = Math.floor(data[2] % 60);

hour = data[0] === 'AM' ? hour + Number(time[0]) : hour + Number(time[0]) + 12;
min = min + Number(time[1]);
sec = sec + Number(time[2]);

if (sec / 60 > 0) {
  min = min + Math.floor(sec / 60);
}

if (min / 60 > 0) {
  hour = hour + Math.floor(min / 60);
}

sec %= 60;
min %= 60;
hour %= 24;

/* print */
console.log(`${timeFormat(hour)}:${timeFormat(min)}:${timeFormat(sec)}`);
