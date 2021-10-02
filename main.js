
const jokeUrl = 'https://api.chucknorris.io/jokes/random'


/* With promises
fetch( jokeUrl ).then( resp => {
  resp.json().then( ({ id, value }) => {
    console.log(id)
    console.log(value)
  })
  
}) */

/* Chaining promises 
fetch( jokeUrl )
  .then( resp => resp.json() )
  .then( ({ id, value }) => {
    console.log(id)
    console.log(value)
  })
*/
