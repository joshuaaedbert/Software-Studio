// import React from 'react';
// import PostList from './PostList';
// import { updatePosts } from '../actions/post-actions'
// import { listPosts } from '../api/posts';

// import './Home.css';

// export default class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     }
//   }
  
//   componentDidMount() {
//     listPosts().then(posts => {
//       this.setState({
//         posts: posts
//       });
//       this.props.store.dispatch(updatePosts(posts));
//     })
//   }

//   render() {
//     return (
//       <div className="posts">
//         <PostList store={this.props.store} posts={this.state.posts} />
//       </div>
//     )
//   }
// }

