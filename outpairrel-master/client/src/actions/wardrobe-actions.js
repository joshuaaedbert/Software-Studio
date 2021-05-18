import {
    listWardrobe as listPostsFromApi,
    createWardrobe as createPostFromApi
} from '../api/wardrobe.js';

import getProduct from '../api/products';

/*  Search text */

export function setfilters(filters) {
    return {
        type: '@FILTERS/SET_FILTERS',
        filters
    };
}

function endListPosts(posts) {
    return {
        type: '@POST/END_LIST_POSTS',
        posts
    };
}

function endCreatePost(post) {
    return {
        type: '@POST/END_CREATE_POST',
        post
    };
}

export function listPosts(filter, post) {
    // post.map(p => {
    //     console.log(p.code)
    // })
    return (dispatch, getState) => {
        return listPostsFromApi(filter, post).then(posts => {
            console.log('posts fr redux' + posts)
            dispatch(endListPosts(posts));
        }).catch(err => {
            console.error('Error listing posts', err);
        })
    };
};

export function createPost(id, tags) {
    return (dispatch, getState) => {
        return createPostFromApi(id,tags).then(post => {
            dispatch(endCreatePost(post));
        }).catch(err => {
            console.error('Error Creating Posts', err);
        })
    };
};

function endStoreProducts(products){
    return {
        type: '@WARDROBE/END_STORE_PRODUCT',
        products
    };
}



export function storeProducts() {
    return (dispatch, getState) => {
        return getProduct().then(product => {
            dispatch(endStoreProducts(product));
        }).catch(err => {
            console.error('Error Store Product', err);
        })
    };
}

export function setId(id) {
    return {
        type: '@WARDROBE/SET_ID',
        id
    }
}
