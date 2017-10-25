function scrollToElement(element) {
    document.querySelector('.' + element).scrollIntoView({
        behavior: 'smooth'
    });
}


function startTimer(duration, display) {
    var start = Date.parse("2017-10-25T13:00"),
        diff,
        minutes,
        hours,
        seconds;

    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        seconds = (diff % 60) | 0;
        minutes = ((diff / 60) % 60) | 0;
        hours = ((diff / 60) / 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        hours = hours < 10 ? "0" + hours : hours;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (diff <= 0) {
            display.textContent = "0 segundos"
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};