"use strict";
(function() {
    let timer;
    let countDownDate;
    let customTimerLength;
    let pauseTime;
    let pauseLength;
    let start;
    let isRunning;

    const customBreakInput = document.querySelector("#break-input");
    const minutesInput = document.querySelector("#minutes-input");
    const secondsInput = document.querySelector("#seconds-input");
    const hoursInput = document.querySelector("#hours-input");
    const timerDisplay = document.querySelector(".timer")
    const titleDisplay = document.querySelector("title");


    function timerF() {
        //Core timer's functionality
        let now = Date.now();
        let distance = countDownDate - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        //Display the timer
        timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
        //Display the timer in the title section
        titleDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;

        timer = setTimeout(timerF, 1000)
        //When the time is out
        if(distance <= 0) {
            clearInterval(timer);
            document.querySelector(".timer").innerHTML =  "00:00:00";
            document.title = timerDisplay.innerHTML = "00:00:00";
            isRunning = false;
            changeFavicon();
            alarm();
            return;
        }
    }

    //Play alarm sound when session ends
    function alarm() {
        const alarm1 = document.querySelector("#alarm-goes-off");
        alarm1.play();
    }

    //Change favicon every time the timer is on
    function changeFavicon(){
        let icon = document.querySelector("#favicon");
        if(isRunning) {
            icon.setAttribute("href", "images/favicon-32x32.png");
        } else {
            icon.setAttribute("href", "images/output-onlinepngtools.png")
        }
    }

    function resetF() {
        clearInterval(timer);
        pauseTime = NaN;
    }

    //Listeners for start, pause, stop etc...
    const startButton = document.querySelector(".btn-start");

    startButton.addEventListener("click", ()=> {
        clearInterval(timer);
        startButton.innerHTML = "starts";
        if(isNaN(pauseTime)) {
            start = Date.now();
            //Reads values from the input fields
            customTimerLength = hoursInput.value * 60 * 60 * 1000 + minutesInput.value * 60 * 1000 + secondsInput.value * 1000;
            countDownDate = start + customTimerLength;
            timerF();
            isRunning = true;
            changeFavicon();
        } else {
            start = Date.now();
            countDownDate = start + pauseLength;
            timerF();
            isRunning = true;
            changeFavicon();
        }
    })

    const setTimerButton = document.querySelector(".btn-set-timer").addEventListener("click", ()=> {
        resetF();
        start = Date.now();
        customTimerLength = hoursInput.value * 60 * 60 * 1000 + minutesInput.value * 60 * 1000 + secondsInput.value * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    })

    const stopButton = document.querySelector(".btn-stop").addEventListener("click", ()=> {
        pauseTime = Date.now();
        pauseLength = countDownDate - pauseTime;
        clearInterval(timer);
        startButton.innerHTML = "Resume"
        isRunning = false;
        changeFavicon();
    });

    const resetButton = document.querySelector(".btn-reset").addEventListener("click", ()=> {
        resetF();
        startButton.innerHTML = "start";
        timerDisplay.innerHTML = "00:00:00";
        isRunning = false;
        changeFavicon();
    })

    const shortBreakButton = document.querySelector(".btn-short-break").addEventListener("click", ()=> {
        resetF();
        start = Date.now();
        customTimerLength = 5 * 60 * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    })

    const longBreakButton = document.querySelector(".btn-long-break").addEventListener("click", ()=> {
        resetF();
        start = Date.now();
        customTimerLength = 15 * 60 * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    })

    const setBreakTimeButton = document.querySelector(".btn-set-break").addEventListener("click", ()=> {
        resetF();
        start = Date.now();
        customTimerLength = customBreakInput.value * 60 * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    })

})();