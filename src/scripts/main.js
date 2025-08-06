AOS.init();

var eventDate = new Date('Jul 30, 2026 00:00:01');
eventDate = eventDate.getTime();

const countdown = setInterval(function(){
    var today = new Date();
    today = today.getTime();
    const timeUntilEvent = eventDate - today;

    const daysMS = 1000 * 60 * 60 * 24;
    const hoursMS = 1000 * 60 * 60;
    const minutesMS = 1000 * 60;

    const cdDays = Math.floor(timeUntilEvent / daysMS);
    const cdHours = Math.floor((timeUntilEvent % daysMS) / (hoursMS));
    const cdMinutes = Math.floor((timeUntilEvent % hoursMS) / (minutesMS));
    const cdSeconds = Math.floor((timeUntilEvent % minutesMS) / 1000);

    document.getElementById('countdown').innerHTML = `${cdDays} D ${cdHours} H ${cdMinutes} M ${cdSeconds} S`;

    if (timeUntilEvent < 0) {
        document.querySelector(".hero__content").innerHTML = "";
        clearInterval(countdown);
    }
}, 1000);