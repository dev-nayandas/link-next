export const getDateDifferenceFromNow = (fromDate) => {
    let difference = new Date().getTime() - new Date(fromDate).getTime();

    difference = difference / 1000; // Convert milliseconds to seconds
    const yearDifference = Math.floor(difference / (3600 * 24 * 365)); // Calculate years
    if (yearDifference > 0) {
        return `${yearDifference} year${yearDifference > 1 ? 's' : ''}`;
    }

    const dayDifference = Math.floor(difference / (3600 * 24)); // Calculate days
    difference -= dayDifference * 3600 * 24;

    const hourDifference = Math.floor(difference / 3600); // Calculate hours
    difference -= hourDifference * 3600;

    const minuteDifference = Math.floor(difference / 60); // Calculate minutes
    difference -= minuteDifference * 60;

    let message = '';

    if (dayDifference > 0) {
        message = `${dayDifference} day${dayDifference > 1 ? 's' : ''}`;
    }

    if (hourDifference > 0) {
        message = message
            ? `${message} ${hourDifference} hour${hourDifference > 1 ? 's' : ''}`
            : `${hourDifference} hour${hourDifference > 1 ? 's' : ''}`;
    }

    if (minuteDifference > 0) {
        message = message
            ? `${message} ${minuteDifference} minute${minuteDifference > 1 ? 's' : ''}`
            : `${minuteDifference} minute${minuteDifference > 1 ? 's' : ''}`;
    }

    if (difference > 0) {
        message = message
            ? `${message} ${Math.round(difference)} second${difference > 1 ? 's' : ''}`
            : `${Math.round(difference)} second${difference > 1 ? 's' : ''}`;
    }

    return message || '0 seconds'; // Return '0 seconds' if there's no difference
};
