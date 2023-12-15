export const currentTimeValues = {
    currentTimeSeconds: 0,
    currentTimeMinutes: 0
}

export function timer(Seconds, Minutes) {
    if (Seconds < 59) {
        Seconds += 1;

        return currentTimeValues.currentTimeSeconds = Seconds;
    } else {
        Minutes += 1;
        Seconds = 0;

        return (currentTimeValues.currentTimeSeconds = Seconds, currentTimeValues.currentTimeMinutes = Minutes);
    }
}