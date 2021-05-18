import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { setId } from '../actions/wardrobe-actions';
import { connect } from 'react-redux';

import './PostItem.css';

export default class PostItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    render() {
        const { id, photo, likes } = this.props;
        return (
            // <Link to={`post/${id}`}>
                <div className="article d-flex justify-content-center" onClick={this.handleClick}>
                    <div>
                        <img src={photo} alt={id} />
                        <h6 className="likes">{likes} likes</h6>
                    </div>
                </div>
            // </Link>
        );
    }
}

// export default connect(state => ({
//     id: state.setId
// }))(PostItem);