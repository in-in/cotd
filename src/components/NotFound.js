import React from 'react';

const NotFound = ({ location }) => (
  <div>
    <h2>
      Not found <code>{location.pathname}</code>
    </h2>
  </div>
);

export default NotFound;
