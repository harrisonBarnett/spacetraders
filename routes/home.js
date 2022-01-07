const express = require('express')
const router = express.Router()
const axios = require('../config/axios')

const accountURL = 'https://api.spacetraders.io/my/account'
const mapURL = 'https://api.spacetraders.io/game/systems'
router.get('/', async (req, res) => {
    const userData = await axios.get(accountURL)
    const mapData = await axios.get(mapURL)
    // res.json({'user': userData.data.user, 'map': mapData.data.systems})
    res.render('home', {userData: userData.data.user, mapData: mapData.data.systems})
})

module.exports = router