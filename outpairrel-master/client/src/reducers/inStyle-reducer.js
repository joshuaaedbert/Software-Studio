const initProductState = {
  productLoading: false,
  products: {
    shoes: {
      code: 0,
      images: [{url: 'https://i.blogs.es/9c5b6f/homewear-la-monocromatica-propuesta-de-pull-bear-para-adoptar-el-blanco-y-negro-en-casa/1366_2000.jpg'}],
      articleColorNames: ['white'],
      name: "shoes1"
    },
    top: {
      code: 1,
      images: [{url: 'https://i.blogs.es/f0e716/homewear-la-monocromatica-propuesta-de-pull-bear-para-adoptar-el-blanco-y-negro-en-casa/1366_2000.jpg'}],
      articleColorNames: ['black'],
      name: "top1"
    },
    pants: {
      code: 2,
      images: [{url: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/408487/item/goods_68_408487.jpg?width=2000'}],
      articleColorNames: ['blue'],
      name: "pants1"
    },
  },
  hasMore: true,
};

const styleReducer = (state = initProductState, action) => {
  switch(action.type) {
    case 'UPDATE':
      switch(action.payload['mainCategoryCode'].slice(0, 10)) {
        case 'men_shirts':
          state.products['top'] = action.payload;
          return state;
        case 'men_shorts':
          state.products['pants'] = action.payload;
          return state;
      }
    default:
      return state;
  }
};

export default styleReducer;
