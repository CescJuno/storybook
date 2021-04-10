import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import fp from 'lodash/fp';
import PropTypes from 'prop-types';

import MainContainer from '../containers/MainContainer';
import {
    Main
} from '../pages';
const RouteMap = (props) => {
    const Layout = fp.get(`layout`, props);
    return <Layout {...props} />;
  };
  
  RouteMap.propTypes = {
    props: PropTypes.object,
  };
  
  const Routers = () => {
    const menu = [
      {
        layout: MainContainer,
        path: `/`,
        component: Main,
      },
    ];
  
    return (
      <Router>
        <Switch>
          {fp.map(
            (item) => (
              <RouteMap
                key={fp.pipe(fp.get(`component`), fp.toString)(item)}
                isActive={fp.pipe(fp.get(`isActive`), fp.toString)(item)}
                {...item}
                exact
              />
            ),
            menu,
          )}
        </Switch>
      </Router>
    );
  };
  
  export default Routers;
  