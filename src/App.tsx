import React, { useEffect } from 'react';
import './App.css';
import '@fontsource/chakra-petch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { siderClientRoutes } from './routing';
import { SiderRoutes } from './routing/types';
import { AuthLayout, DashboardLayout, VerifyEmail } from 'views';

// redux
import { Provider } from 'react-redux';
import { loadUser } from 'appRedux/actions/authAction';
import store from 'appRedux/store';

// middleware
import RequireAuth from './utils/RequireAuth';
import { Alert } from 'components';
// import { Landing } from 'views/landing/Landing';

/**
 * Main App
 *
 * @returns {React.FC} TODO Component
 */
const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  /**
   * Recusive Routing configuration
   *
   * @param {Array<SiderRoutes>} routes to be iterated
   * @returns {React.ReactNode} subRoutes
   */
  const developRoutes = (routes: Array<SiderRoutes>): React.ReactNode => {
    return routes.map((route, key) => {
      return route.index ? (
        <Route path={''} index={route.index} element={route.component} key={key} />
      ) : (
        <Route path={route.path} index={route.index} element={route.component} key={key} />
      );
    });
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Alert />
          <Routes>
            <Route path="verify-email/:tokenId" element={<VerifyEmail />} />

            <Route path="*" element={<AuthLayout />} />

            <Route
              path="user"
              element={
                <RequireAuth>
                  <DashboardLayout />
                </RequireAuth>
              }>
              {developRoutes(siderClientRoutes)}
            </Route>
            {/* <Route path="*" element={<Landing />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
