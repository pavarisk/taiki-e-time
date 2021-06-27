import request from 'superagent'

export async function getFacts () {
  return await request.get('/v1/facts')
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/v1/facts'))
}

function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${route}`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
