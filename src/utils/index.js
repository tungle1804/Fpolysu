export function getCurrentDate(separator = '') {

    let newDate = new Date()
    let date = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year = newDate.getFullYear();
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
}