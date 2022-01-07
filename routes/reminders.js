const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send('getting reminders')
})

router.post('/', async (req, res) => {
    res.send('sent a reminder')
})

module.exports = router