import React from 'react';
import PropTypes from 'prop-types';

const DetailsPage = props => (
  <div>
    <h1>Product details for "{props.product.name}"</h1>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

DetailsPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
