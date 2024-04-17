const express = require('express')

const PORT = 3000


const app = express()


app.use(express.json())


app.get('/items', (req, res) => {
    res.status(200).json(items)
})

app.get('/:id' , (req, res) => {
    res.send("bonjour monde" + req.params.id)
})


app.post('/items', (req, res) => {
    let item = req.body

    items.push(item)
    console.log(items)
    res.status(201).send("ressource créé avec succès")
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})