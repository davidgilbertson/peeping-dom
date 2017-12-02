import React from 'react';
import PropTypes from 'prop-types';
import historyManager from '../../utils/historyManager';
import { captureInteraction } from '../../peepingDomUtils/utils';


const Link = props => (
  <a
    href={props.to}
    className={props.className}
    data-interaction-id={props.interactionId}
    onClick={(e) => {
      e.preventDefault();

      captureInteraction(e);

      historyManager.push(props.to);
    }}
  >
    {props.children}
  </a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  interactionId: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default Link;
