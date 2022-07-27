function pointSet(num){
  try {
    document.getElementById("points").innerHTML = num
  } catch (e) {
    document.getElementById("points").innerHTML = 0
  }


}

function getPreGameValue(){
  var playerValue = document.getElementById("plays").value - 1;
  console.log(playerValue)
  localStorage.setItem('playV', `${playerValue}`)
  localStorage.setItem('points', `${0}`)
}

function getScores(){
  let playerValue = localStorage.getItem('playV')
  playerGuess = document.getElementById("total").value
  playerFingers = document.getElementById("fing").value
  var scores=[Math.floor(playerFingers)]
  var msg = ["Player(you)","Fingers: "+playerFingers]
  var scoreLst= localStorage.getItem('scoreLst')
  var counter = parseInt(localStorage.getItem('playCount'), 10)


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
    var outP=msg.toString()
    for(let i = 0; i < outP.length; i++){
      try{
        outP = outP.replace(/,/, " - ")
        outP = outP.replace(/,/, "<br>")

      }catch{

      }
    }
    msg.push("Total: "+sum)
    msg.push("Score: "+points)
    counter = counter+1
    localStorage.setItem('scoreLst', `${scoreLst}`)
    localStorage.setItem('playCount', `${counter}`)
    if(counter==5){
      location.replace("/game/score")
    }
    document.getElementById('result').innerHTML += '<li>' + outP + '</li><hr>';
    console.log(msg)
    localStorage.setItem('points', `${points}`)
    console.log(counter)
    localStorage.setItem('playCount', `${counter}`)
    if(counter==5){
      location.replace("/game/score")
    }
}
function getScores2(){
  let playerValue = localStorage.getItem('playV')
  var scoreLst= localStorage.getItem('scoreLst')
  var counter = parseInt(localStorage.getItem('playCount'), 10)

  playerGuess = document.getElementById("val").value
  playerFingers = document.getElementById("fing").value

  var scores=[Math.floor(playerFingers)]
  var msg = [" Player(you)"," Fingers: "+playerFingers]

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
    var outP=msg.toString()
    for(let i = 0; i < outP.length; i++){
      try{
        outP = outP.replace(/,/, " - ")
        outP = outP.replace(/,/, "<br>")

      }catch{

      }
    }
    scoreLst=scoreLst+'<li>' +" "+outP+" "+"</li><hr>"
    counter = counter+1
    localStorage.setItem('scoreLst', `${scoreLst}`)
    localStorage.setItem('playCount', `${counter}`)
    if(counter==5){
      location.replace("/game/score")
    }
    document.getElementById('result').innerHTML += '<li>' + outP + '</li><hr>';
    console.log(msg)
    localStorage.setItem('points', `${points}`)

}
