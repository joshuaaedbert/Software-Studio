import React from 'react';
import PropTypes from 'prop-types';
import './WardrobeList.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { listWardrobe, createWardrobe } from '../api/wardrobe.js'
import {listPosts, createPost} from '../actions/wardrobe-actions.js';
import TagItem from './TagItem.js'
import {connect} from 'react-redux';


export default class TagList extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.dispatch(listPosts(this.props.filter));
        console.log('taglist')
    }

    // componentWillUnmount() {

    // }

    // componentWillReceiveProps(nextProps) {
    //     if (JSON.stringify(nextProps.filter) != JSON.stringify(this.props.filter)) {
    //         // this.listWardrobe(nextProps.filter);
    //         this.props.dispatch(listPosts(nextProps.filter));
    //     }
    // }

    render() {
        let {expanded, posts} = this.props;
        if(!posts) posts = [];
        // let children = this.state.posts.map(p =>(
        //     <ListGroupItem>
        //         <Wardrobe_item {...p} expanded={expanded}/>
        //     </ListGroupItem>
        // ));
        let contentClass = expanded ? 'open' : '';
        let children = posts.map(p =>(
            // <div className={`${contentClass}`}>
                <ListGroupItem className={`list-group-item-${contentClass}`}>
                    <TagItem id={p.code} name={p.defaultArticle.name} photo={p.defaultArticle.images[0].url} tags = {[...p.defaultArticle.name.toLowerCase().split(' '), ...p.mainCategoryCode.toLowerCase().split('_')]} expanded={expanded}/>
                </ListGroupItem>
            // </div>
        ));
        return (
            <div>
                <ListGroup className='inline-grid'>{children}</ListGroup>
            </div>
        );
    }
}
