const postKey = 'posts';

export function listWardrobe(filters = [], posts = []) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listWardrobe(filters, posts));
        }, 500);
    });
}

// Simulated server-side code
function _listWardrobe(filters = [], posts = []) {
    
    // console.log("item: " + item)
    // let postString = localStorage.getItem(postKey);
    if (posts.length > 0 && filters.length > 0) {
        posts = posts.filter(p => {
            // return !p.tags.some(tag => !filters.includes(tag))
            let tags = [...p.defaultArticle.name.toLowerCase().split(' '), ...p.mainCategoryCode.toLowerCase().split('_')]
            return !filters.some(tag => !tags.includes(tag))
        });
    }
    // console.log(posts)
    return posts;
};

export function createWardrobe(id, tags) {
    return new Promise((resolve, reject) => {
        resolve(_createWardrobe(id, tags));
    });
}

function _createWardrobe(id, tags) {
    const newPost = {
        id: id,
        tags: tags
    };
    const posts = [
        newPost,
        ..._listWardrobe()
    ];
    // localStorage.setItem(postKey, JSON.stringify([]));
    localStorage.setItem(postKey, JSON.stringify(posts));
    // console.log('posts: '+ posts)
    return newPost;
}