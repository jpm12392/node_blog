const Post = require('../models/Post');


// Controller to create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await Post.create({ title, content });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({order: [['createdAt', 'DESC']]});
        res.status(200).json({"status":true,"message":"Data found successfully", "data":posts});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a post by ID
exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.findByPk(req.params.id);
        if (post) {
            post.title = title || post.title;
            post.content = content || post.content;
            await post.save();
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a post by ID
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            await post.destroy();
            res.json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};