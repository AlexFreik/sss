function getHourStr(hour) {
    console.assert(0 <= hour && hour <= 24, hour);
    if (hour <= 12) return hour + ' AM';
    return hour - 12 + ' PM';
}

function daysInMonth(year, month) {
    return new Date(year, (month + 1) % 12, 0).getDate();
}

function escapeHTML(str) {
    return new Option(str).innerHTML;
}

function toISTString(date, timeZone = 'Asia/Kolkata') {
    return new Date(date)
        .toLocaleString('sv-SE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: timeZone,
        })
        .replace(' ', 'T');
}

// function parseDate(str) {
//   return {
//     year: Number(str.slice(0, 4)),
//     month: Number(str.slice(5, 7)),
//     date: Number(str.slice(8, 10)),
//   }
// }

function toISTDate(str) {
    const dateString = `${str}T00:00:00+05:30`;
    return new Date(dateString);
}

function getDateRange(baseStr, range) {
    const baseDate = toISTDate(baseStr);

    const minDate = new Date(baseDate);
    minDate.setDate(minDate.getDate() - range);

    const maxDate = new Date(baseDate.getTime() - 1);
    maxDate.setDate(maxDate.getDate() + range + 1);

    return [minDate, maxDate];
}

export { getHourStr, daysInMonth, escapeHTML, toISTString, getDateRange };
