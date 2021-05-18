import React, { useEffect } from 'react';
import './Post.css';
import { useDispatch, useSelector } from 'react-redux';
import ImageCard from './ImageCard.js';
import { setId } from '../actions/wardrobe-actions'
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

function Post(props) {
    const posts = useSelector(state => state.posts.posts);
    const id = useSelector(state => state.setId);
    console.log(id);
    console.log(posts)

    // console.log(props);
    let bro = posts.filter(post => {
        // return post.id == match.params.id
        return post.id == id
    })
    console.log(bro)
    let children = (
        <ListGroupItem className="d-flex justify-content-center align-items-center">
            <div className="empty-text">No tags</div>
        </ListGroupItem>
    );

    if (posts.length) {
        children = bro[0].tags.map(tag => (
            <ListGroupItem onClick={() => {
                props.onQuery(tag[0].id)
            }} style={{ width: '25rem' }}>
                <img src={tag[0].photo} alt={tag[0].id} style={{ width: '5px', height: '5px', paddingRight: '1rem' }} />
                <span>{tag[0].name}</span>
            </ListGroupItem>
        ))
    }

    return (
        <div>
            <div className="flex mx-auto bg-gray-200">
                <div className="flex-1 text-center px-4 py-8 m-2">
                    {posts.map(post => (
                        post.id == id ? <ImageCard id={post.id} photo={post.photo} like={post.likes} /> : <span></span>
                    ))}
                </div>
                <div className="vl flex-1 text-center px-4 py-8 m-2"></div>
                <div className="flex-1 text-center px-4 py-8 m-2">
                    <div className="bg-gray-200 p-4">
                        <span className="block text-gray-700 bg-gray-400 px-4 py-2">
                            <ListGroup>{children}</ListGroup>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post;