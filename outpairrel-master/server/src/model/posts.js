const fs = require('fs');
const { uuid } = require('uuidv4');
const moment = require('moment');

function list() {
    return new Promise((resolve, reject) => {
        if(!fs.existsSync('data-posts.json')) {
            fs.writeFileSync('data-posts.json', '');
        }

        fs.readFile('data-posts.json', 'utf8', (err, data) => {
            if(err) reject(err);
            let posts = data ? JSON.parse(data) : [];

            resolve(posts);
        });
    });
}

function create(tags, photo) {
    return new Promise((resolve, reject) => {
        const newPost = {
            id: uuid(),
            ts: moment().unix(),
            likes: 0,
            photo: photo,
            tags: tags
        };
        list().then(posts => {
            posts = [
                newPost,
                ...posts,
            ];
            fs.writeFile('data-posts.json', JSON.stringify(posts), err => {
                if(err) reject(err);
                resolve(newPost);
            });
        })
    })
}

module.exports = {
    list,
    create
}