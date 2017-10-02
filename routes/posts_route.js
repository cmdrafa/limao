const mongoose = require('mongoose');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
var fs = require('fs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req);
        console.log(file);
        cb(null, '/media/posts')
    },
    filename: (req, file, cb) => {
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
})
const upload = multer({
    storage: storage
});

const Post = mongoose.model('posts');

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    // New blog post
    app.post('/api/posts', async (req, res) => {
        //console.log(req.body);
        const { title, body, subject, section, briefDesc, video, files, url } = req.body;

        const post = await new Post({
            title,
            briefDesc,
            body,
            subject,
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
        console.log(req)
        if( req.file && req.file.originalname ) {
            console.log(`Received file ${req.file.originalname}`);
        }
        //res.send(req.file.path);
        //res.send({responseTex: req.file.path});
    })

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
    })

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
        res.send(posts)
    });
};