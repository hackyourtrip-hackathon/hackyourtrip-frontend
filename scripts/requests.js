const axios = require('axios')
const localBase = 'http://localhost:3000'
const APIbase = 'https://api.discover.com/dci/currencyconversion/v1/exchangerates'

function getToken() {
  return axios.get(`${localBase}/data`)
}
function attachHeaders(token) {
  return (
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-DFS-API-PLAN': 'DCI_CURRENCYCONVERSION_SANDBOX',
        'Authorization': `Bearer ${token}`,
        'Allow-Control-Allow-Origin': '*'
      }
    }
  )
}

getToken()
.then( (response) => {
  const token = response['access_token']
  return attachHeaders(token)
})


function getExchangeRates() {
  return getToken()
  .then( (response) => {
    const token = response.data.access_token
    return axios.get(APIbase, attachHeaders(token))
  })

}

module.exports = { getExchangeRates }