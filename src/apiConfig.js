let apiUrl
const expressPort = 3004
const apiUrls = {
  production: 'https://stormy-fjord-24171.herokuapp.com/',
  development: `http://localhost:${expressPort}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
