import PropTypes from 'prop-types';
import React from 'react';

export default function Page({ children }) {
  return (
    <div>
      <h4>more from the page layout compeonent</h4>
      <h2>i am the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
