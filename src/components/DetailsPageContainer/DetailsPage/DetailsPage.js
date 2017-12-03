import React from 'react';
import PropTypes from 'prop-types';
import {
  captureInteraction,
  saveRecording,
} from '../../../peepingDomUtils/utils';
import './DetailsPage.css'

const DetailsPage = props => (
  <div className="DetailsPage">
    <h1>{props.product.name}</h1>

    <button
      data-interaction-id={`Buy product button: ${props.product.id}`}
      className="DetailsPage__buy-button"
      onClick={(e) => {
        captureInteraction(e);
        saveRecording();
      }}
    >
      Buy this for {props.product.price}
    </button>

    <img
      alt={props.product.name}
      src={props.product.img}
    />
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
