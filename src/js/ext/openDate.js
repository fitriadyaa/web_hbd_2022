export const isBDay = function() {
    const startTime = new Date(process.env.OPEN_DATE + "T00:00").getTime();
    const endTime = '2023-09-16';
    const localTime = Date.now();
    if (localTime < startTime) return "IS_EARLY";
    if (localTime > endTime) return "IS_LATE";
    return "ON_TIME";
};