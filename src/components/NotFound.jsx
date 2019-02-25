import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ location }) => (
  <div>
    <h2>
      Not found
      <code>{location.pathname}</code>
    </h2>
  </div>
);

NotFound.propTypes = {
  location: PropTypes.string.isRequired,
};

export default NotFound;
