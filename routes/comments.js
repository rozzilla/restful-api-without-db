module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.postId].comments)
    },
    addComment(req, res) {
        req.store.posts[req.params.postId].comments.push(req.body)
        res.status(201).send({ "idComment": req.store.posts[req.params.postId].comments.length })
    },
    updateComment(req, res) {
        const idComment = req.params.commentId
        req.store.posts[req.params.postId].comments[idComment] = req.body
        res.status(200).send(req.store.posts[req.params.postId].comments[idComment])
    },
    removeComment(req, res) {
        req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }
}