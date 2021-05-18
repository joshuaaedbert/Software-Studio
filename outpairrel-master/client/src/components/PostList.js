// import React, { Component } from 'react';
// import {
//     ListGroup,
//     ListGroupItem
// } from 'reactstrap';
// import PostItem from './PostItem';

// import './PostList.css';

// export default class PostList extends Component {
//     render() {
//         const {posts} = this.props;
//         let children = (
//             <ListGroupItem className="d-flex justify-content-center align-items-center">
//                 <div className="empty-text">The End.</div>
//             </ListGroupItem>
//         );
//         if(posts.length) {
//             children = posts.map(post => (
//                 <ListGroupItem className="d-flex justify-content-center" >
//                     <PostItem store={this.props.store} id={post.id} photo={post.photo} likes={post.likes} />
//                 </ListGroupItem>
//             ))
//         }
//         return (
//             <div className="post-list">
//                 <ListGroup>{children}</ListGroup>
//             </div>
//         );
//     }
// }