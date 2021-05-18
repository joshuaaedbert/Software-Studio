import postReducer ,  { tagReducer, listTagReducer }  from './post-reducers';
import productReducer from './product-reducers';
import {wardrobeReducer, filterReducer, idReducer, storeProductReducer} from './wardrobe-reducers';
import styleReducer from './inStyle-reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  posts: postReducer,
  products: productReducer,
  filter: filterReducer,
  tags: tagReducer,
  item: wardrobeReducer,
  listTags: listTagReducer,
  setId: idReducer,
  storeProduct: storeProductReducer,
  style: styleReducer
});

export default allReducers;