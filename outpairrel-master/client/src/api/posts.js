import axios from 'axios';

const postBaseUrl = 'http://localhost:3000/api';

export function listPosts() {
    let url = `${postBaseUrl}/posts`;
    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if(res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function createPost(tags, photo) {
    let url = `${postBaseUrl}/posts`;
    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        tags,
        photo
    }).then(function(res) {
        if(res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    })
}