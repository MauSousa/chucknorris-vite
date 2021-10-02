import { getJoke } from "./js/http-provider";


getJoke().then( console.log )



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
