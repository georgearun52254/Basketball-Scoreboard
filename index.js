let homeEl=document.getElementById("home-el")
let guestEl=document.getElementById("guest-el")
let resultEl=document.getElementById("result-el")
let winnerEl=document.getElementById("winner-el")
let homescore=0
let guestscore=0
function incrementH1(){
  homescore+=1
  homeEl.textContent=homescore
}
function incrementH2(){
  homescore+=2
  homeEl.textContent=homescore
}
function incrementH3(){
  homescore+=3
  homeEl.textContent=homescore
}
function incrementG1(){
  guestscore+=1
  guestEl.textContent=guestscore
}
function incrementG2(){
  guestscore+=2
  guestEl.textContent=guestscore
}
function incrementG3(){
  guestscore+=3
  guestEl.textContent=guestscore
}
function resetH() {
  homescore=0
  homeEl.textContent=homescore

}
function resetG() {
  guestscore=0
  guestEl.textContent=guestscore
}
function newgame() {
   homescore=0
  homeEl.textContent=homescore
  guestscore=0
  guestEl.textContent=guestscore
  winner="_"
  winnerEl.textContent=winner
  scores="0"+" - "+"0"
  resultEl.textContent=scores
}
let scores="0"+" - "+"0"
function saveScores(){
  scores= homescore+" - "+guestscore
  resultEl.textContent=scores
 if (homescore<guestscore) {
  winner="GUEST"
 }
 else if (homescore==guestscore){
  winner="DRAW"
 }
 else{
  winner="HOME"
 }
  winnerEl.textContent=winner
}