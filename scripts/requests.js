const axios = require('axios')
const localBase = 'http://localhost:3000'
const exchangeRates = 'https://api.discover.com/dci/currencyconversion/v1/exchangerates'
const cityGuides = 'https://api.discover.com/cityguides/v2/merchants'

function getToken() {
  return axios.get(`${localBase}/token`)
}

function attachHeaders(plan, token) {
  return (
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-DFS-API-PLAN': plan,
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
    return axios.get(exchangeRates, attachHeaders('DCI_CURRENCYCONVERSION_SANDBOX', token))
  })
}

function getCities() {
  return getToken()
  .then ( response => {
    const token = response.data.access_token
    console.log(token)
    return axios.get(cityGuides, attachHeaders('CITYGUIDES_SANDBOX', token))
  })
}

module.exports = { getExchangeRates, getCities }
