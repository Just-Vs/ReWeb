
//const selectionButtons = document.querySelectorAll('[data-selection]')

//selectionButtons.forEach(selectionButton=>{
//  selectionButton.addEventListener('Inputs', e => {
//    const selectionName = selectionButton.dataset.selection
//    makeSelection(selectionName)
//  })

//})
//function makeSelection(selection) {
//  console.log(selection)
//}
function pointSet(num){
  document.getElementById("points").innerHTML = num
}

function getPreGameValue(){
  var difficultyValue = document.getElementById("dif").value;
  console.log(difficultyValue)
  var playerValue = document.getElementById("plays").value - 1;
  console.log(playerValue)
  localStorage.setItem('playV', `${playerValue}`)
  localStorage.setItem('points', `${0}`)
  pointSet(0)
}

function getScores(){
  let playerValue = localStorage.getItem('playV')
  playerGuess = document.getElementById("total").value
  playerFingers = document.getElementById("fing").value
  var scores=[Math.floor(playerFingers)]
  var msg = ["Player(you)","Fingers: "+playerFingers]

  var points = localStorage.getItem('points')
  if (points == null){
    var points =0
  }

  pointSet(points)
  let sum = 0

  for (let i=0; i<parseInt(playerValue, 10);i++){
    score = Math.floor(Math.random() * 6)
    scores.push(score)
    msg.push("Player "+(i+2),"Fingers: "+score)
  }

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];

    }


    if (sum==playerGuess) {
        points++

    }
    msg.push("Total: "+sum)
    msg.push("Score: "+points)
    console.log(msg)
    localStorage.setItem('points', `${points}`)
}
function getScores2(){
  let playerValue = localStorage.getItem('playV')
  playerGuess = document.getElementById("val").value
  playerFingers = document.getElementById("fing").value
  var scores=[Math.floor(playerFingers)]
  var msg = ["Player(you)","Fingers: "+playerFingers]

  var points = localStorage.getItem('points')
  if (points == null){
    var points =0
  }


  let sum = 0

  for (let i=0; i<parseInt(playerValue, 10);i++){
    score = Math.floor(Math.random() * 6)
    scores.push(score)
    msg.push("Player "+(i+2),"Fingers: "+score)
  }

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];

    }
    if (sum % 2 ==0 ) {
      var tot = "even"
    }else{
      var tot = "odd"
    }


    if (tot==playerGuess) {
        points++

    }
    pointSet(points)

    msg.push("Total: "+sum)
    msg.push("Score: "+points)
    console.log(msg)
    localStorage.setItem('points', `${points}`)
}
