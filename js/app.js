(function() {

    const startButton = document.querySelector(".btn-start").addEventListener("click", ()=> {
        startTimer();
    })
    const stopButton = document.querySelector(".btn-stop").addEventListener("click", ()=> {
        stopTimer();
    });
    const resetButton = document.querySelector(".btn-reset").addEventListener("click", ()=> {
        resetF();
    })
    const shortBreakButton = document.querySelector(".btn-short-break").addEventListener("click", ()=> {
        shortBreak();
    })
    const longBreakButton = document.querySelector(".btn-long-break").addEventListener("click", ()=> {
        longBreak();
    })
    const setTimerButton = document.querySelector(".btn-set-timer").addEventListener("click", ()=> {
        setCustomTime();
    })
    const setBreakTimeButton = document.querySelector(".btn-set-break").addEventListener("click", ()=> {
        setBreakTime();
    })


    // const logContainer = document.querySelector("#log");
    // const logStart = document.querySelector(".start-log");
    // const logStop = document.querySelector(".stop-log");

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


    let timerF = () => {

        let now = Date.now();
        let distance = countDownDate - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay = document.querySelector(".timer").innerHTML = hours + ":" + minutes + ":" + seconds;
        document.title = timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;

        if(distance < 0) {
            clearInterval(timer);
            document.querySelector(".timer").innerHTML =  "00:00:00";
            document.title = timerDisplay.innerHTML = "00:00:00";
            isRunning = false;
            changeFavicon();
            return;
        }

        timer = setTimeout(timerF, 1000)
    }


    const alarm1 = document.querySelector("#alarm-goes-off");
        function alarm() {
        alarm1.play();
    }

    function changeFavicon(){
        let icon = document.querySelector("#favicon");
        if(isRunning) {
            icon.setAttribute("href", "images/favicon-32x32.png");
        } else {
            icon.setAttribute("href", "images/output-onlinepngtools.png")
        }
    }

    let resetF = () => {
        clearInterval(timer);
        pauseTime = NaN;
        //startButton.innerHTML = "start";
        const timerDisplay = document.querySelector(".timer").innerHTML = "00:00:00";
        isRunning = false;
        changeFavicon();
    }

    function startTimer() {

        if(isNaN(pauseTime)) {
            //startButton.innerHTML = "start";
            start = Date.now();
            customTimerLength = hoursInput.value * 60 * 60 * 1000 + minutesInput.value * 60 * 1000 + secondsInput.value * 1000;
            countDownDate = start + customTimerLength;
            timerF();
            isRunning = true;
            changeFavicon();
        }


        else {
            start = Date.now();
            countDownDate = start + pauseLength;
            timerF();
            isRunning = true;
            changeFavicon();
        }
    }

    function setCustomTime() {
        resetF();
        start = Date.now();
        customTimerLength = hoursInput.value * 60 * 60 * 1000 + minutesInput.value * 60 * 1000 + secondsInput.value * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    }

    function stopTimer() {
        pauseTime = Date.now();
        pauseLength = countDownDate - pauseTime;
        resetF();
        startButton.innerHTML = "Resume"
        isRunning = false;
        changeFavicon();
    }

    function shortBreak() {
        resetF();
        start = Date.now();
        customTimerLength = 5 * 60 * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    }

    function longBreak() {
        resetF();
        start = Date.now();
        customTimerLength = 15 * 60 * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    }

    function setBreakTime() {
        resetF();
        start = Date.now();
        customTimerLength = customBreakInput.value * 60 * 1000;
        countDownDate = start + customTimerLength;
        timerF();
        isRunning = true;
        changeFavicon();
    }



    // function logInfo()  {
    //     customTimerLength = hoursInput.value * 60 * 60 * 1000 + minutesInput.value * 60 * 1000 + secondsInput.value * 1000;
    //     console.log(customTimerLength);
    // }

    // logStart.addEventListener("click", ()=> {
    //     logInfo();
    // })

})();





var maximum69Number  = function(num) {
    let sum = [];
    for(let i = 0; i < num.length; i++) {

            if(num[i] === "6") {
                sum.push("9");

            } else if (num[i] === "9") {
                sum.push("6");
            }
    }
         return sum;
};

maximum69Number("9669");

const maximum69Numberr = num => {
    console.log(Number(num.toString().replace('6', '9')))
    ;}

maximum69Numberr("9669")