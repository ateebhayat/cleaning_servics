// import { format, utcToZonedTime } from 'date-fns-tz';

export function formatDate() {
    // if (value) {
    //     const dateInUtc = new Date(value);
    //     const dateInNewYork = utcToZonedTime(dateInUtc, 'America/New_York');
    //     return format(dateInNewYork, 'yyyy-MM-dd');
    // }
    // return null;
}
export const scrollFunctions = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};
