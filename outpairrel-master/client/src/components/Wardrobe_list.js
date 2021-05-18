// import React from 'react';
// import PropTypes from 'prop-types';
// import './Wardrobe_list.css';
// import { ListGroup, ListGroupItem } from 'reactstrap';
// import { listWardrobe, createWardrobe } from '../api/wardrobe.js'
// import {listPosts, createPost} from '../actions/wardrobe-actions.js';
// import Wardrobe_item from './Wardrobe_item.js'
// import {connect} from 'react-redux';


// class Wardrobe_list extends React.Component {
//     static propTypes = {
//         lists: PropTypes.array,
//         filter: PropTypes.array
//     };

//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     posts: []
//         // }
//         // this.handleCreateWardrobe = this.handleCreateWardrobe.bind(this);
//     }

//     componentDidMount() {
//         console.log('mount')
//         this.props.dispatch(listPosts(this.props.filter));
//     }

//     componentWillUnmount() {

//     }

//     componentWillReceiveProps(nextProps) {
//         if (JSON.stringify(nextProps.filter) !== JSON.stringify(this.props.filter)) {
//             // this.listWardrobe(nextProps.filter);
//             this.props.dispatch(listPosts(nextProps.filter));
//         }
//     }

//     render() {
//         let {expanded, posts} = this.props;
//         if(!posts) posts = [];
//         // let children = this.state.posts.map(p =>(
//         //     <ListGroupItem>
//         //         <Wardrobe_item {...p} expanded={expanded}/>
//         //     </ListGroupItem>
//         // ));
//         let children = posts.map(p =>(
//             <ListGroupItem>
//                 <Wardrobe_item {...p} expanded={expanded}/>
//             </ListGroupItem>
//         ));
//         return (
//             <div>
//                 <ListGroup className='grid' style={{display: 'grid'}}>{children}</ListGroup>
//             </div>
//         );
//     }

//     // listWardrobe(searchText) {
        
//     //     listWardrobe(searchText).then(posts => {
//     //         this.setState({
//     //             posts
//     //         });
//     //     }).catch(err => {
//     //         console.error('Error listing', err);

//     //         this.setState({
//     //             posts: []
//     //         });
//     //     });
        
//     //     console.log(this.state.posts)
//     // }

//     // handleCreateWardrobe(id, tags) {
//     //     createWardrobe(id, tags).then(() => {
//     //         this.listWardrobe(this.props.filter);
//     //     }).catch(err => {
//     //         console.error('Error creating', err);
//     //     });
//     // }
// }

// export default connect(state => ({
//     posts: state.item.item,
//     filter: state.filter
// }))(Wardrobe_list);
