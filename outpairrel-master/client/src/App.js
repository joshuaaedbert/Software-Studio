import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from 'reactstrap';
import Home from './components/Home';
import Discover from './components/Discover';
import Style from './components/Style';
import Wardrobe from './components/Wardrobe';
import ProductQuery from './components/ProductQuery';
import Post from './components/Post';
import Tag from './components/Tag';
import { withCookies } from 'react-cookie';
import { storeProducts } from './actions/wardrobe-actions';
import getProduct from './api/products';

import './App.css';
import Photo from './components/Photo';

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      wardrobe: cookies.get('wardrobe') ? cookies.get('wardrobe').split(';') : []
    }
    this.handleWardrobe = this.handleWardrobe.bind(this);
  }

  componentDidMount() {
    // getProduct().then(products => {
    //   this.props.store.dispatch(storeProducts(products))
    // })
    this.props.store.dispatch(storeProducts())
  }

  render() {
    return (
      <Router>
        <div className="App bg-faded">
          <Navbar className="navbar fixed-top bg-dark" style={{height: '4rem', alignContent:'center'}}>
           <NavbarBrand className="MainLogo" href="/">
              <i class="fas fa-circle-notch"></i>
              utpairrel
            </NavbarBrand>
            <Nav>
              {/* <NavItem>
                <NavLink className="text-white" tag={Link} to="/">
                <i class="fas fa-home"></i>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/">
                <i class="fas fa-home"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/style">
                <i class="fas fa-tshirt"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/wardrobe">
                <i class="fas fa-door-open"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/photo">
                <i class="fas fa-plus"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <div className="pages">
          <Route exact path="/" render={() => <Discover store={this.props.store} />} />
          {/* <Route exact path="/discover" render={() => <Discover store={this.props.store} />} /> */}
          <Route exact path="/style" render={() => <Style store={this.props.store} />} />
          <Route exact path="/wardrobe" render={() => <Wardrobe items={this.state.wardrobe}/>} />
          <Route exact path="/product_query" render={() => <ProductQuery />} />
          <Route exact path="/tags" render={() => <Tag />} />
          <Route exact path="/photo" render={() => <Photo />} />
          {/* <Route exact path="/post/:id" component={Post} /> */}
          <Route exact path="/post/:id" render={() => <Post onQuery={this.handleWardrobe} />} />
        </div>
      </Router>
    );
  }

  handleWardrobe(item) {
    console.log(item)
    const { cookies } = this.props;
    let list = cookies.get('wardrobe') ? cookies.get('wardrobe').split(';') : []
    if(!list.includes(item)){
      cookies.set('wardrobe', `${cookies.get('wardrobe') ? cookies.get('wardrobe') : ''};${item}`);
      // cookies.set('wardrobe', '');
      this.setState({
        wardrobe: cookies.get('wardrobe') ? cookies.get('wardrobe').split(';') : []
      });
    }
  }
}

export default withCookies(App);