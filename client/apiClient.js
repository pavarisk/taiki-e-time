import request from 'superagent'

export function getFacts () {
  return request.get('/v1/facts')
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/v1/facts'))
}

export function getFactById (id) {
  return request.get(`/v1/randomFact/${id}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/v1/randomFacts/'))
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
