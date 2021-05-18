import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

export default class ProductItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    render() {
        const {id, photo} = this.props;
        return (
            <Link to={'post'}>
                <div className="d-flex flex-column" onClick={this.handleClick}>
                    <div className="d-flex">
                        <img src={photo} alt={id} />
                    </div>
                </div>
            </Link>
        );
    }
}