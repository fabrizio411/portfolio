export const getYearsDelta = (date1: Date, date2: Date) => {
    let delta = date2.getFullYear() - date1.getFullYear();

    if (
        date2.getMonth() < date1.getMonth() ||
        (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())
    ) {
        delta--;
    }

    return delta;
}