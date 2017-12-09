import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import historyManager from '../../utils/historyManager';
import { captureInteraction } from '../../peepingDomUtils/record';
import './ProductList.css'

const ProductList = props => (
  <Fragment>
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        name="search"
        placeholder="Search"
        className="ProductList__search-input"
        data-interaction-id="Product search input"
        value={props.ui.query}
        onChange={(e) => {
          props.changeSearchQuery(e.target.value);
        }}
        onFocus={captureInteraction}
        autoFocus
      />
    </form>

    <ul className="ProductList__list">
      {props.products.map(product => (
        <li key={product.id} className="ProductList__list-item">
          <img
            className="ProductList__product-img"
            alt={product.name}
            src={product.img}
          />
          <p className="ProductList__product-name">
            {product.name}
          </p>

          <p className="ProductList__product-price">
            ${product.price}
          </p>

          <button
            className="ProductList__product-details-button"
            data-interaction-id={`Product details button: ${product.id}`}
            onClick={(e) => {
              captureInteraction(e);

              historyManager.push('/details', {
                productId: product.id,
              });
            }}
          >
            Details
          </button>
        </li>
      ))}
    </ul>
  </Fragment>
);

ProductList.propTypes = {
  changeSearchQuery: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number,
    }),
  ),
  ui: PropTypes.shape({
    query: PropTypes.string,
  }).isRequired,
};

export default ProductList;
