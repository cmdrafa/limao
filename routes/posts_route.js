const mongoose = require('mongoose');
//const _ = require('lodash');
//const Path = require('path-parser');
//const { URL } = require('url');
//var fs = require('fs');
const multer = require('multer');
//const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'limao-client/public/media/posts');
    },
    filename: (req, file, cb) => {
        let ext;
        switch (file.mimetype) {
            case 'image/jpeg':
                ext = '.jpeg';
                break;
            case 'image/png':
                ext = '.png';
                break;
            case 'image/gif':
                ext = '.gif';
                break;
        }
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});

const upload = multer({
    storage: storage
});

const Post = mongoose.model('posts');

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    // New blog post
    app.post('/api/posts', async (req, res) => {

        const { title, body, subject, section, briefDesc, video, imageurl, url } = req.body;

        const post = await new Post({
            title,
            briefDesc,
            body,
            subject,
            imageurl,
            section,
            postDate: Date.now(),
            _user: req.user.id,
            video,
            url
        });
        post.save();

        res.send({ message: 'New post added' });
    });

    // Upload media to the server
    app.post('/api/mediaupload', upload.single('file'), async (req, res) => {
        console.log(req);
        if (req.file && req.file.originalname) {
            console.log(`Received file ${req.file.originalname}`);
        }
        console.log('req.file', req.file.path);
        const file_path = req.file.path.split('/');
        const path_to_send = file_path.pop();
        console.log('Path to send', path_to_send);

        res.send(path_to_send);
    });

    // Fetch blog post
    app.get('/api/posts', async (req, res) => {
        const posts = await Post.find({});

        res.send(posts);
    });

    // Fetch post by the URL
    app.get('/api/postbyurl', async (req, res) => {
        const postUrl = req.headers.referer.split('/');
        const urlDb = postUrl.pop() || postUrl.pop();

        const post = await Post.find({ url: urlDb });

        res.send(post);
    });

    // Fetch the users post
    app.get('/api/author_post', requireLogin, async (req, res) => {
        const posts = await Post.find({ _user: req.user.id });

        res.send(posts);
    });

    // Fetch post by category(section)
    app.get('/api/postbycat', async (req, res) => {
        const postSec = req.headers.referer.split('/');
        const section = postSec.pop() || postSec.pop();
        console.log(section);

        const posts = await Post.find({ section: section });

        console.log(posts);
        res.send(posts);
    });
};