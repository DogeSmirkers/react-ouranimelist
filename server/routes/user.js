// import express
const express = require('express')
const {createUser} = require('../dynamic-doge')
const router = express.Router();
router.use(express.json())

router.post('/add', async (req, res) => {
        const user = req.body
        try {
                const newUser = await createUser(user)
                res.json(newUser)
        } catch (error) {
                res.status(500).json({err: `BEEP BOOP SOMETHING IS WRONG ＼（〇_ｏ）／ `})
        }
})

module.exports = router