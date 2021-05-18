const fs = require('fs');

const postModel = require('./posts');

function like(postId) {
    return new Promise((resolve, reject) => {
        let votedPost = null;
        postModel.list().then(posts => {
            posts = posts.map(p => {
                if(p.id === postId) {
                    votedPost = p;
                    p[likes]++;
                }
                return p;
            });
            fs.writeFile('data-posts.json', JSON.stringify(posts), err => {
                if(err) reject(err);
                resolve(votedPost);
            });
        });
    });
}

module.exports = {
    like
}