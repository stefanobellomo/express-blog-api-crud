const posts = require('../data/listPosts')

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    const id = Number(req.params.id)
    const post = posts.find((post) => (id === post.id))
    res.json(post)
}

function store(req, res) {
    res.send('Create new element')
}

function update(req, res) {
    res.send(`aggiornare il post con id: ${req.params.id}`)
}

function modify(req, res) {
    res.send(`aggiornare  qualche elemento del post con id: ${req.params.id}`)
}

function destroy(req, res) {
    res.send(`eliminare il post con id: ${req.params.id}`)
}

module.exports = { index, show, store, update, modify, destroy }