import { getJoke } from './http-provider'

const body = document.body
let btnJoke, olList, btnClean

const createJokeHtml = () => {
  const html = `
  <h1 class="mt-5">Chuck Norris Api Jokes</h1>
  <hr />
  
  <button class="btn btn-primary">Get Joke</button>
  <button class="btn btn-success" id="clean">Clear</button>
  
  <ol class="mt-3 list-group-horizontal" list-group>
    
  </ol>
  
  `

  const divJokes = document.createElement('div')
  divJokes.innerHTML = html

  body.append(divJokes)
}

const events = () => {
  olList = document.querySelector('ol')
  btnJoke = document.querySelector('button')
  btnClean = document.getElementById('clean')

  btnJoke.addEventListener('click', async () => {
    btnJoke.disabled = true
    drawJoke(await getJoke())
    btnJoke.disabled = false
  })

  btnClean.addEventListener('click', () => {
    olList.innerHTML = null
  })

}

// Gets value and id from api
const drawJoke = (joke) => {
  const olItem = document.createElement('li')
  olItem.innerHTML = `<img src=${joke.icon_url}> <b>${joke.id}</b>: ${joke.value}`
  olItem.classList.add('list-group-item')

  olList.append(olItem)
}

export const init = () => {
  createJokeHtml()
  events()
}
