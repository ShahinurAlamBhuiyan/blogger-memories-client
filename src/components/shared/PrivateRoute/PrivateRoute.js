import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin?.result.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;