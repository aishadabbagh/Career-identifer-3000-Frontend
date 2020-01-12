let apiUrl
const expressPort = 3004
const apiUrls = {
  production: 'https://still-depths-47986.herokuapp.com/',
  development: `http://localhost:${expressPort}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
