import React from 'react';
import { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { setId } from '../actions/wardrobe-actions';

export default class ImageCard extends Component {
    render() {
        const { id, photo, like } = this.props;
        return (
            <Link onClick={() => {
                console.log(id)
                this.props.store.dispatch(setId(id))
            }}to={`/post/${id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={this.handleClick}>
                    <img src={photo} alt={id} className="w-full"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl-mb-2">
                            <h1> Joshua Edbert </h1>
                        </div>
                        <ul> 
                            <li>
                                <strong>Likes: </strong> {like}
                            </li>
                        </ul>
                    </div>
                </div>   
            </Link>
        );
    }
}
