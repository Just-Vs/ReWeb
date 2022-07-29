async function getData(){
  let searchOptions = {}
  try{
    const players = await Player.find(searchOptions)
    console.log(players)
    return players
  }catch{
    const players = []
    console.log(players)
    return players
  }
