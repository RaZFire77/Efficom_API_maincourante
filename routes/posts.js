const express = require("express")
const router = express.Router()
const Post = require("../models/Post")

//GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch {
    res.json({ message: err })
  }
})

//SUBMIT A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch {
    res.json({ message: err })
  }
})

//Delete Post

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId })
    res.json(removedPost)
  } catch {
    res.json({ message: err })
  }
})

//Update the statut of a post

router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: { title: req.body.title, content: req.body.title },
      }
    )

    res.json({ updatedPost })
  } catch {
    res.json({ message: err })
  }
})

module.exports = router
