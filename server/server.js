require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.get('/api/fighterlist', ctrl.getFighterList)
app.post('/api/fighterlist', ctrl.addFighter)
app.put('/api/fighterlist/:id', ctrl.updateFighter)
app.delete('/api/fighterlist/:id', ctrl.deleteFighter)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Scouting for skill`))