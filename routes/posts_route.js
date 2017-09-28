const mongoose = require('mongoose');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
var fs = require('fs');

const Post = mongoose.model('posts');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    // New blog post
    app.post('/api/posts', async (req, res) => {
        const { title, body, subject, section, briefDesc, img, video, url } = req.body;

        const post = await new Post({
            title,
            briefDesc,
            body,
            subject,
            section,
            postDate: Date.now(),
            _user: req.user.id,
            img,
            video,
            url
        });
        post.save();

        res.send({ message: 'New post added' });
    });

    // Fetch blog post
    app.get('/api/posts', async (req, res) => {
        const posts = await Post.find({});

        res.send(posts);
    });

    app.get('/api/postbyurl', async (req, res) => {
        const postUrl = req.headers.referer.split('/');
        const urlDb = postUrl.pop() || postUrl.pop();

        const post = await Post.find({ url: urlDb });

        res.send(post);
    })

    // Fetch the users post
    app.get('/api/author_post', requireLogin, async (req, res) => {
        const posts = await Post.find({ _user: req.user.id });

        res.send(posts);
    });

    app.get('/api/postbycat', async (req, res) => {
        const postSec = req.headers.referer.split('/');
        const section = postSec.pop() || postSec.pop();
        console.log(section);

        const posts = await Post.find({section: section});

        console.log(posts);
        res.send(posts)
    });
};