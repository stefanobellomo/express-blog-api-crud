const express = require('express')
const app = express()
const postsRouter = require('./routers/posts')
const PORT = 3001
const notFound = require('./middleware/notFound')
const errore = require('./middleware/errore')

app.use(express.static('public'))

// registriamo il body parser per la conversione dei dati
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
})

// i percorsi sono intuibili pensando a cosa ci stiamo riferendo in quell'operazione, se vogliamo aggiungere un oggetto lo facciamo nell'array generale quindi solo /posts, se volesimo intervenire sul singolo post con delle modifiche o delete it allora ci riferiamo all'id /posts/:id

// entry point
app.get('/', (req, res) => {
    res.send('Welcome to my blog')
})

app.use('/api/posts', postsRouter)

app.use(errore)
app.use(notFound)



