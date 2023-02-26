//what we have? 00:00 //min-b min-s:sec-b sec-s

//Dom
const min = document.querySelector(".minute")
const sec = document.querySelector(".second")

const btnStart=document.querySelector(".btn-start")
//set start time
min.innerHTML = "0" + "2"
sec.innerHTML = "0" + "0"

//start to count down

let id = null


function countDown() {
  let minute = Number(min.innerHTML)
  let second = Number(sec.innerHTML)

  if (minute === 0 && second === 0) {
    clearInterval(id)
    btnStart.disabled=false
    return
  }
  if (minute === 0) {
    min.innerHTML = "0" + "0"
  }
  if (second === 0) {
    sec.innerHTML = "5" + "9"
    min.innerHTML = "0" + String(Number(min.innerHTML) - 1)
  }
  if (second !== 0) {
    if (second <= 10) {
      sec.innerHTML = "0" + String(Number(sec.innerHTML - 1))
    } else {
      sec.innerHTML = sec.innerHTML - 1
    }
  }
}
function start(){
    btnStart.disabled=true
    btnStart.style="opacity:0.4"
    id = setInterval(countDown, 1000)

}
function reset(){
    clearInterval(id)
    min.innerHTML = "0" + "2"
    sec.innerHTML = "0" + "0"
    btnStart.disabled=false
    btnStart.style="opacity:1"


}