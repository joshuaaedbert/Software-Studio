import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Collapse, Container, Button, Input } from 'reactstrap';
import './Wardrobe.css'
import TagList from './TagList.js';
import { Row, Col } from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import getProduct from '../api/products';
import './react-sidenav.css'
import FilterList from './FilterList.js'
import { connect } from 'react-redux';
import { settags } from '../actions/post-actions';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: false,
      searchText: [],
      productList: []
    }

    this.searchEl = null;
    this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    const {productList} = this.props
    // productList.map(products => {
    //   console.log(products)
    //   this.setState({
    //     productList: products
    //   })
    // })
    this.setState({
      productList: productList
    })
  }
  render() {
    const { tags } = this.props
    let post = this.state.productList;
    let sidebarClass = this.state.buttonToggle ? 'sidebar-open' : 'sidebar';
    console.log('tags: ' + tags)
    console.log('productList: ' + this.state.productList)
    if (tags.length > 0) {
      post = post.filter(p => {
          let tag = [...p.defaultArticle.name.toLowerCase().split(' '), ...p.mainCategoryCode.toLowerCase().split('_')]
          return !tags.some(t => !tag.includes(t))
      });
  }

    return (
      <div>
        {/* <h1 className="text-warning">WARDROBE</h1> */}
        <div className='w-lists'>
          <SideNav onToggle={this.handleClick}>
            <SideNav.Toggle />
            <Collapse isOpen={this.state.buttonToggle}>
              <div className='search'>
                <Input type='text' innerRef={this.searchEl} placeholder='Search' onKeyPress={this.handleSearchKeyPress} innerRef={e => this.searchEl = e}
                style={{padding: '0.375rem .75rem', borderRadius: '.25rem', height: 'calc(1.5em + .75rem + 2px)', width: '80%', margin: '0 auto', backgroundColor:'white'}}></Input>
                {
                  this.state.searchText.length >= 1 &&
                  <i className='navbar-text fa fa-times' onClick={this.handleClearSearch}></i>
                }
              </div>
              <FilterList filter={tags} handleClear={this.handleClear} />
            </Collapse>
          </SideNav>
          <TagList posts={post} expanded={this.state.buttonToggle} />
        </div>
      </div>
    )
  }



  handleClick() {
    this.setState((prevState, props) => ({
      buttonToggle: !prevState.buttonToggle
    }));
  }

  handleSearchKeyPress(e) {
    const { tags } = this.props;
    // var a = [...this.state.searchText];
    var a = [...tags];
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      if (!tags.some(el => el === e.target.value.toLowerCase())) {
        this.props.dispatch(settags([e.target.value.toLowerCase(), ...a]))
      }
      this.searchEl.value = '';
    }

  }

  handleClearSearch() {
    const { tags } = this.props;
    this.props.dispatch(settags(tags.filter(text => {
      return text !== this.searchEl.value
    })))
    this.searchEl.value = '';
  }

  handleClear(text) {
    const { tags } = this.props;
    this.props.dispatch(settags(tags.filter(tags => {
      return tags !== text
    })))
  }
}

export default connect(state => ({
  tags: state.tags,
  productList: state.storeProduct
}))(Tag);
