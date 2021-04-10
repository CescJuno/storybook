import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExtraLayout = ({ component: Component, ...rest }) => {
  return (
    <>
      <div className={`container`}>
        <Route
          {...rest}
          render={(routeProps) => <Component {...routeProps} />}
        />
      </div>
    </>
  );
};

ExtraLayout.propTypes = {
  component: PropTypes.elementType,
};

export default ExtraLayout;
