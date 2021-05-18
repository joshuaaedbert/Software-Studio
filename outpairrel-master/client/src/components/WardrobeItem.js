import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WardrobeItem.css'
import Photo from './Photo';

export default class WardrobeItem extends Component {
    static propTypes = {
        tags: PropTypes.array,
    }

    constructor(props){
        super(props);
    }
    render() {
        const {id, tags, photo , expanded} = this.props;
        let contentClass = expanded ? 'open' : '';
        return (
            <div>
                <div className={`item ${contentClass}`}>
                    {console.log(tags)}
                    {/* <span className = {contentClass}>
                    </span> */}
                    {/* <span className='text'>{id}</span> */}
                    {/* <span className='rectangle'><img className='img' src={`image/${id[1]}.png`}/></span>
                    <span className='rectangle'></span>
                    <span className='rectangle'></span> */}
                    <span className='rectangle'><img className='img' src={photo}/></span>
                    {/* {console.log('id: ' + tags)} */}
                </div>
            </div>
        )
    }
}