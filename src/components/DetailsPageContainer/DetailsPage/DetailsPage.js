import React from 'react';
import PropTypes from 'prop-types';
import { captureInteraction } from '../../../peepingDomUtils/record';
import './DetailsPage.css'

const DetailsPage = props => (
  <div className="DetailsPage">
    <h1>{props.product.name}</h1>

    <button
      data-interaction-id={`Buy product button: ${props.product.id}`}
      className="DetailsPage__buy-button"
      onClick={(e) => {
        captureInteraction(e);

        // I'm using toLocaleString() without checking that product.price exists because
        // Daryl from the database corner of the office said it's totally
        // impossible for the price column to ever be empty.
        // Daryl has never lead me astray in the past and I see no reason to start doubting him now
        window.alert(`Thanks for buying ${props.product.name} for $${props.product.price.toLocaleString()}`)
      }}
    >
      Buy this for ${props.product.price}
    </button>

    <img
      className="DetailsPage__image"
      alt={props.product.name}
      src={props.product.img}
    />
  </div>
);

DetailsPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
  }).isRequired,
};

export default DetailsPage;
