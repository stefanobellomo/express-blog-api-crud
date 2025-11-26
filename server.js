const express = require('express')
const app = express()
const postsRouter = require('./routers/posts')
const PORT = 3001

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
})

// i percorsi sono intuibili pensando a cosa ci stiamo riferendo in quell'operazione, se vogliamo aggiungere un oggetto lo facciamo nell'array generale quindi solo /posts, se volesimo intervenire sul singolo post con delle modifiche o delete it allora ci riferiamo all'id /posts/:id

// entry point
app.get('/', (req, res) => {
    res.send('Welcome to my blog')
})

app.use('/api/posts', postsRouter)



