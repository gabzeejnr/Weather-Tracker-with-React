const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}

const dateOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit"
};

export function dateTimeFormat(time) {
    const date = new Intl.DateTimeFormat("en-US", timeOptions).format(time);
    const year = new Intl.DateTimeFormat("en-US", dateOptions).format(time);
    return {
        date,
        year
    }
}

export function convertTo12Hour(timeString) {

  const [hourStr, minuteStr] = timeString.split(':');
  let hours = parseInt(hourStr, 10);
  const minutes = minuteStr.padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm}`;
}