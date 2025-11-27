const posts = require('../data/listPosts')

function index(req, res) {

    const tags = req.query.tags;

    let filteredTags = posts

    if (tags) {
        filteredTags = posts.filter(post => post.tags.includes(tags))
        console.log(filteredTags);
    }

    res.json(filteredTags)
}

function show(req, res) {

    const id = Number(req.params.id)
    const post = posts.find((post) => (id === post.id))

    // se non trovi il post...
    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'Post not found'
        })
    }

    res.json(post)
}

function store(req, res) {

    const postData = req.body
    const newId = posts[posts.length - 1].id + 1

    const newPost = {
        id: newId,
        title: postData.title,
        content: postData.content,
        image: postData.image,
        tags: postData.tags,
    }

    posts.push(newPost)
    res.json(newPost)

}

function update(req, res) {

    // res.send(`aggiornare il post con id: ${req.params.id}`)
}

function modify(req, res) {
    const id = Number(req.params.id)
    const post = posts.find((post) => (id === post.id))

    res.send(`aggiornare  qualche elemento del post con id: ${req.params.id}`)
}

function destroy(req, res) {
    const id = Number(req.params.id)
    const post = posts.find((post) => (id === post.id))

    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'Not found!'
        })
    }

    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)
    res.json(post)

}

module.exports = { index, show, store, update, modify, destroy }