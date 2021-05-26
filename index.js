/*
for ([initialization]; [condition]; [iteration]) {
  [loop body]
} 
*/

function writeCards(cards, event){
  const newArray = []
    for (let i = 0; i < cards.length; i++ ){
      newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
  }
  return newArray
}

/*
while ([condition]) {
  [loop body]
} 
*/

function countDown(){
  let newCount = 10
  while (newCount >-1) {
    console.log (newCount--)
  }
}