var time_ele = document.getElementById('time');
var start_btn = document.getElementById('start_btn');
var reset_btn = document.getElementById('reset_btn');
var totalMills = 0
var isStarted = false;
start_btn.addEventListener("click", startStop)
reset_btn.addEventListener("click", reset)
var timer;
function startStop() {
  if (isStarted) {
    start_btn.innerHTML = "Start"
    isStarted = false
    clearInterval(timer)
    setTimeValue()
  } else {
    start_btn.innerHTML = "Stop"
    isStarted = true
    timer = setInterval(() => {
      totalMills++;
      setTimeValue()
    }, 10)
  }
}

function reset() {
  start_btn.innerHTML = "Start"
  isStarted = false
  totalMills = 0
  clearInterval(timer)
  setTimeValue()

}


function setTimeValue() {

  let mills = totalMills;
  let sec = 0
  let mins = 0;
  let hours = 0;
  if (mills > 99) {
    sec = Math.round(mills / 100)
    mills = mills % 100
  }
  if (sec > 59) {
    mins = Math.round(sec / 60)
    sec = sec % 60
  }
  if (mins > 59) {
    hours = Math.round(mins / 60)
    mins = mins % 60
  }
  let millsFormated = mills < 10 ? `0${mills}` : `${mills}`
  let secFormated = sec < 10 ? `0${sec}` : `${sec}`
  let minFormated = mins < 10 ? `0${mins}` : `${mins}`
  let hourFormated = hours < 10 ? `0${hours}` : `${hours}`
  time_ele.innerHTML = `${hourFormated}:${minFormated}:${secFormated}:${millsFormated}`

}