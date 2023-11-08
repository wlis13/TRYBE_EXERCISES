// from Military 24Hrs to AM/PM

function getHourValue() {
  const hourValue = new Date();
  const hours = hourValue.getHours();
  const minutes = hourValue.getMinutes();
  const seconds = hourValue.getSeconds();

  const objectHour = {
    hour: hours,
    minutes: minutes,
    seconds: seconds
  }

  return objectHour;
};

function convertForAmPm(hours) {
  const { hour, minutes, seconds } = hours;
  let convertedHour = hour;
  if (hour > 12) {
    convertedHour -= 12;
  }

  console.log(`${convertedHour}:${minutes}:${seconds}`)
};

convertForAmPm(getHourValue());

// from AM/PM to Military 24Hrs
function getElementsHour(hours) {
  const format = `${hours[hours.length - 2]}${hours[hours.length - 1]}`;
  const arrHour = hours.split(":");
  const hour = arrHour[0];
  const minutes = arrHour[1];
  const seconds = arrHour[2].slice(0, 2);
  const objectHour = {
    format: format,
    hour: hour,
    minutes: minutes,
    seconds: seconds
  }

  return objectHour;
};

function changeFormatMilitary(hours) {
  const { format, hour, minutes, seconds } = hours;
  let formatedHour = parseInt(hour, 10);
  const midNight = format === "AM" && formatedHour === 12;
  const midDay = format === "PM" && formatedHour !== 12;
  if (midDay) {
    formatedHour += 12;
  }
  if (midNight) {
    formatedHour = `0${formatedHour -= 12}`;
  }

  const formattedHour = formatedHour.toString().padStart(2, "0");
  console.log(`${formattedHour}:${minutes}:${seconds}`)
}

changeFormatMilitary(getElementsHour("12:20:00AM"));
