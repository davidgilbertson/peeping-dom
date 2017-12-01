import React from 'react';
import PropTypes from 'prop-types';

const Link = props => (
  <a
    href={props.href}
    onClick={(e) => {
      e.preventDefault();
      console.log('  --  >  Link.js:13 >  > props.href:', props.href);
      props.onClick(props.href);
    }}
  >
    {props.children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
