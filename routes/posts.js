module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
        req.store.posts.push(req.body)
        res.status(201).send({"id": req.store.posts.length})
    },
    updatePost(req, res) {
        const id = req.params.postId
        req.store.posts[id] = req.body
        res.status(200).send(req.store.posts[id])
    },
    removePost(req, res) {
        req.store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
}