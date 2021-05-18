const initProductState = {
  productLoading: false,
  products: [
    {
      id: 0,
      photo:
        'https://i.blogs.es/9c5b6f/homewear-la-monocromatica-propuesta-de-pull-bear-para-adoptar-el-blanco-y-negro-en-casa/1366_2000.jpg',
      type: 'shoes',
      tags: ['white']
    },
    {
      id: 1,
      photo: 'https://i.blogs.es/f0e716/homewear-la-monocromatica-propuesta-de-pull-bear-para-adoptar-el-blanco-y-negro-en-casa/1366_2000.jpg',
      type: 'top',
      tags: ['black']
    },
    {
      id: 2,
      photo:
        'https://static.pullandbear.net/2/photos/2019/I/0/2/p/5590/524/606/5590524606_2_6_1.jpg',
      type: 'top',
      tags: ['red', 'white', 'blue']
    },
  ],
  hasMore: true,
};

const productReducer = (state = initProductState, action) => {
  return state;
};

export default productReducer;