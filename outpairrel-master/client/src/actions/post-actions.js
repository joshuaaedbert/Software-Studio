export function settags(tags) {
    return {
        type: '@TAGS/SET_TAGS',
        tags
    };
}

export function createTag(tags) {
    return {
        type: '@TAG/END_CREATE_TAGS',
        tags
    };
}

export function clearTag() {
    return {
        type: '@TAG/CLEAR_TAGS'
    };
}

export function setImg(image) {
    return {
        type: '@TAG/SET_IMG',
        image
    };
}

export function addPost(tags, img){
    return {
        type: '@POSTS/ADD_POST',
        tags, img
    };
}

export function updatePosts(posts){
    return {
        type: '@POSTS/UPDATE_POSTS',
        posts
    }
}