const express = require('express')
const router = express.Router()

// index - visualizzare tutti gli elementi
const posts = require('../data/listPosts')

router.get('/', (req, res) => {
  res.json(posts)
})

// show - visualizzare l'elemento
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => (id === post.id))
  res.json(post)
})

// CON FIND
// const singlePost = posts.find((post) => {
//   if (Number(req.params.id) === post.id) {
//     return res.json(post)
//   }
// })

// CON CICLO FOR
// for (let i = 0; i < posts.length; i++) {
//   const post = posts[i];
//   if (post.id === id) {
//     return res.json(post)
//   }
// }

// store - creare un nuovo elemento
router.post('/', (req, res) => {
  res.send('Create new element')
})

// update - aggiornare più parti di un elemento o interamente
router.put('/:id', (req, res) => {
  res.send(`aggiornare il post con id: ${req.params.id}`)
})

// modify - modificare una singola parte di un elemento
router.patch('/:id', (req, res) => {
  res.send(`aggiornare  qualche elemento del post con id: ${req.params.id}`)
})

// destroy - eliminare un post
router.delete('/:id', (req, res) => {
  res.send(`eliminare il post con id: ${req.params.id}`)
})


module.exports = router;



