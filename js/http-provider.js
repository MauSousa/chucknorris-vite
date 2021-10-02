const jokeUrl = 'https://api.chucknorris.io/jokes/random'

const getJoke = async () => {
  try {
    const resp = await fetch(jokeUrl)

    const { icon_url, id, value } = await resp.json()

    return {
      icon_url,
      id,
      value,
    }
  } catch (error) {
    throw error
  }
}

export { getJoke }
