// import { listPosts, createPost } from '../api/posts';

const initPostState = {
    postLoading: false,
    posts: [],
    hasMore: true
}

const postReducer = (state = initPostState, action) => {
    switch (action.type) {
        case '@POSTS/UPDATE_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        // case '@POSTS/ADD_POST':
        //     // var newItems = [...state.posts];
        //     // var post = {
        //     //     id: state.id,
        //     //     photo: action.img,
        //     //     tags: action.tags,
        //     //     like: 0
        //     // }
        //     // newItems = [post, ...newItems];
        //     // return {
        //     //     ...state,
        //     //     id: state.id+1,
        //     //     posts: newItems
        //     // };
        //     createPost(action.tags, action.img).then(
        //         listPosts().then(posts => {
        //             return {
        //                 postLoading: false,
        //                 posts: posts,
        //                 hasMore: true
        //             }
        //         })
        //     ).catch(err => {
        //         console.log('Error creating posts', err);
        //     })
        default:
            return state;
    }
}

export default postReducer;

export function tagReducer(state = [], action) {
    switch (action.type) {
        case '@TAGS/SET_TAGS':
            return action.tags;
        default:
            return state;
    }
  }

  const initTagState = {
    item: [],
    img: '',
    upload: false
}

export function listTagReducer(state = initTagState, action) {
    switch (action.type) {
        // case '@TAG/END_LIST_TAGS':
        //     return {
        //         ...state,
        //         item: action.posts
        //     };
        case '@TAG/END_CREATE_TAGS':
            var newItems = [...state.item];
            if(!newItems.some(el => el[0].name === action.tags[0].name))
                newItems = [action.tags, ...newItems];
            else {
                newItems = newItems.filter(el => {
                    return el[0].name !== action.tags[0].name
                })

                newItems = [action.tags, ...newItems];
            }
            return {
                ...state,
                item: newItems,
            };
        
        case '@TAG/CLEAR_TAGS':
            return {
                img: '',
                item: [],
                upload: true
            };
        
        case '@TAG/SET_IMG':
            return {
                ...state,
                img: action.image
            };
        default:
            return state;
    }
}