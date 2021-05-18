import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import getProduct from '../api/products';
import { update } from '../actions/inStyle-actions';

function ProductQuery() {
  const dispatch = useDispatch();

  // const [productList, updateProducts] = useState([]);
  const productList = useSelector(state => state.storeProduct)
  // useEffect(function () {
  //   getProduct().then((products) => {
  //     updateProducts(products);
  //     console.log(productList);
  //   });
  // }, []);

  let children;
    // <ListGroupItem className="empty d-flex justify-content-center align-items-center">
    //   <div className="empty-text">The End.</div>
    // </ListGroupItem>
  // );
  if (productList.length) {
    children = productList.map((product) => (
      <ListGroupItem key={product.code}>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <img src={product.images[0].url} alt={product.code} />
            <div style={{marginLeft: '2em'}}>
              <h3>{product.name}</h3>
              <h4>${product.price['value']}</h4>
              <Button color="primary" onClick={() => dispatch(update(product))}>
                Try On
              </Button>
            </div>
          </div>
        </div>
      </ListGroupItem>
    ));
  }

  return (
    <div className="container">
      <ListGroup>{children}</ListGroup>
    </div>
  );
}

export default ProductQuery;