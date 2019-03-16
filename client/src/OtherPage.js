import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <div>
        Im some other page!
        <Link to="/">Go back home</Link>
      </div>
    </Router>
  );
};
