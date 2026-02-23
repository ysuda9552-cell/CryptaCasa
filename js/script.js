// JavaScript interactivity for ShieldKey website

function displayCurrentDateTime() {
    const currentDate = new Date();
    const utcFormattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    console.log('Current Date and Time (UTC): ' + utcFormattedDate);
}

displayCurrentDateTime();