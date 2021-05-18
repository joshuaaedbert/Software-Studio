const express = require('express');
const bodyParser = require('body-parser');

const postModel = require('../model/posts.js');
const likeModel = require('../model/like.js')

const router = express.Router();

router.use(bodyParser.json());

router.get('/posts', function(req, res, next) {
    postModel.list().then(posts => {
        res.json(posts);
    }).catch(next);
})

router.post('/posts', function(req, res, next) {
    const { tags, photo } = req.body;
    if(!tags || !photo) {
        const err = new Error('Tag and Photo are required');
        err.status = 400;
        throw err;
    }
    postModel.create(tags, photo).then(post => {
        res.json(post);
    }).catch(next);
})

router.post('/posts/:id', function(req, res, next) {
    const { id } = req.params;
    if(!id) {
        const err = new Error('Post ID is required');
        err.status = 400;
        throw err;
    }
    likeModel.like(id).then(post => {
        res.json(post);
    }).catch(next);
})

module.exports = router;