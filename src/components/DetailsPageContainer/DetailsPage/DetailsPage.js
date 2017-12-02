import React from 'react';
import PropTypes from 'prop-types';
import {
  captureInteraction,
  saveRecording,
} from '../../../peepingDomUtils/utils';

const DetailsPage = props => (
  <div>
    <h1>Product details for "{props.product.name}"</h1>
    <button
      data-interaction-id={`Buy product button: ${props.product.id}`}
      onClick={(e) => {
        captureInteraction(e);
        saveRecording();
      }}
    >
      Buy this product
    </button>

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
