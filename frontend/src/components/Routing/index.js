import React, { Suspense, useEffect } from 'react';
import { Skeleton } from '../';
import { Route } from 'react-router-dom';

const Routing = ({ title, component: Component, struct, ...rest }) => {
  useEffect(() => {
    document.title = `Seguríssimo - ${title}`;
  });
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Suspense fallback={<Skeleton active />}>
          <Component {...routeProps} {...struct} />
        </Suspense>
      )}
    />
  );
};

export default Routing;
