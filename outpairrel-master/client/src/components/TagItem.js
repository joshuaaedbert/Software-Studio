import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WardrobeItem.css'
import { connect } from 'react-redux';
import { createTag } from '../actions/post-actions';
import { withRouter } from 'react-router-dom';

class TagItem extends Component {
    static propTypes = {
        id: PropTypes.string,
        tags: PropTypes.array,
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const {id, photo, tags , expanded} = this.props;
        let contentClass = expanded ? 'open' : '';

        return (
            <div>
                <div className={`item ${contentClass}`}>
                    <span className='rectangle'><img className='img' src={photo} alt={id} onClick={this.handleClick}/>
                    </span>
                </div>
            </div>
        )
    }
    handleClick() {
        const {id, photo, tags, name} = this.props;
        var newTag = [
            {
                id: id,
                name: name,
                photo: photo,
                tags: tags
            }
        ]
        this.props.dispatch(createTag(newTag))
        let path = '/photo'
        this.props.history.push(path);
    }
}

export default connect(state => ({
    filter: state.filter
}))(withRouter(TagItem));