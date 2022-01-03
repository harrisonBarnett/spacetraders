require('dotenv').config()
const axios = require('axios')
axios.defaults.headers.common = {
    'Authorization' : `Bearer ${process.env.USER_TOKEN}`
}
module.exports = axios

// stackoverflow outlining setting defaults for axios requests
// https://stackoverflow.com/a/51445755/15170810