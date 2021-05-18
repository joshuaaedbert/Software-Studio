import React, { useState, useEffect } from 'react';
import './Style.css';
import { 
  Button, 
  NavItem, 
  NavLink,
  ListGroup,
  ListGroupItem
 } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { updatePosts } from '../actions/post-actions';

import PostItem from './PostItem';
import ProductItem from './ProductItem';
// import { render } from '@testing-library/react';
import { listPosts } from '../api/posts';

class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    listPosts().then((posts) => {
      this.setState({
        posts: posts,
      });
      this.props.store.dispatch(updatePosts(posts));
    });
  }

  render() {
    const {style} = this.props;
    let top = style['top'];
    let pants = style['pants'];
    let shoes = style['shoes'];
    let children = (
      <ListGroupItem className="empty d-flex justify-content-center align-items-center">
        <div className="empty-text">The End.</div>
      </ListGroupItem>
    );
    if (this.state.posts.length) {
      let showed_posts = this.state.posts.filter((post) => {
        let product;
        for (product of post.tags) {
          if (top.name === product[0].name) return 1;
          if (pants.name === product[0].name) return 1;
          if (shoes.name === product[0].name) return 1;
        }
        return 0;
      });
      children = showed_posts.map((post) => (
        <ListGroupItem key={post.id}>
          <PostItem id={post.id} photo={post.photo} like={post.like} />
        </ListGroupItem>
      ));
    }

    return (
      <div className="container">
        <div className="flex">
          <div className="styling">
            <Link to="/product_query" style={{ textDecoration: 'none' }}>
              + add clothing
            </Link>
            <div className="container" style={{ width: '50%', margin: 'auto' }}>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <img
                    src={top.images[0].url}
                    alt={top.code}
                    style={{ width: '300px' }}
                  />
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <img
                    src={pants.images[0].url}
                    alt={pants.code}
                    style={{ width: '300px' }}
                  />
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <img
                    src={shoes.images[0].url}
                    alt={shoes.code}
                    style={{ width: '300px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="v-line"
            style={{
              border: '2px solid black',
            }}
          ></div>

          <div className="posts">
            <ListGroup>{children}</ListGroup>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(state => ({
  style: state.style.products
}))(Style);
