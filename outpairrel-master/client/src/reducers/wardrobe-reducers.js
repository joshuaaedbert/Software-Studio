
export function filterReducer(state = [], action) {
    switch (action.type) {
        case '@FILTERS/SET_FILTERS':
            return action.filters;
        default:
            return state;
    }
}

const initItemState = {
    item: [
        // {
        //     id: 0,
        //     tags: ['women','hoodie']
        // },
        // {
        //     id: 1,
        //     tags:['men','shirt']
        // },
        // {
        //     id: 2,
        //     tags:['hoodie']
        // }

    ]
}

export function wardrobeReducer(state = initItemState, action) {
    switch (action.type) {
        case '@POST/END_LIST_POSTS':
            return {
                ...state,
                item: action.posts
            };
        case '@POST/END_CREATE_POST':
            var newItems = [...state.item];
            newItems = [action.post, ...newItems];
            return {
                ...state,
                item: newItems,
            };
        default:
            return state;
    }
}

export function idReducer(state = '', action) {
    switch(action.type){
        case '@WARDROBE/SET_ID':
            return action.id;
        default:
            return state;
    }
}

export function storeProductReducer(state = [], action){
    switch(action.type){
        case '@WARDROBE/END_STORE_PRODUCT':
            return action.products;
        default: 
            return state;
    }
}