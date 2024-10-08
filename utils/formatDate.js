const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
})

export const formatDate = date => {
    const [{ value: month },,{ value: day },,{ value: year },,{ value: hour },,{ value: minute },,{ value: second }] = formatter.formatToParts(date);
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}