import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import historyManager from '../../utils/historyManager';
import { captureInteraction } from '../../peepingDomUtils/utils';
import './ProductList.css'

const ProductList = props => (
  <Fragment>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.changeSearchQuery(e.target.search.value);
      }}
    >
      <input
        name="search"
        data-interaction-id="Product search input"
        onFocus={captureInteraction}
      />

      <button
        data-interaction-id="Product search button"
        onFocus={captureInteraction}
      >
        Search
      </button>
    </form>

    <h1>Products</h1>

    <ul className="ProductList__list">
      {props.products.map(product => (
        <li key={product.id} className="ProductList__list-item">
          {product.name} - {product.price}

          <button
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ),
  changeSearchQuery: PropTypes.func.isRequired,
};

export default ProductList;
