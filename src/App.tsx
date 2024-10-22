import '@fontsource/chakra-petch';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, DashboardLayout, VerifyEmail } from 'views';
import './App.css';
import { siderClientRoutes, siderMsspRoutes, siderProviderRoutes } from './routing';
import { SiderRoutes } from './routing/types';

// redux
import { loadUser } from 'appRedux/actions/authAction';
import store from 'appRedux/store';
import { Provider } from 'react-redux';

// middleware
import { Alert } from 'components';
import Pricing from 'views/Pricing';
import Resources from 'views/Resources';
import LandingSaas from 'views/landing/LandingSaas';
import LandingLayout2 from 'views/layout/components/LandingLayout2';
import SubscriptionPayment from 'views/subscriptions/SubscriptionPayment';
import RequireAuth from './utils/RequireAuth';
import YouHaveBeenPhished from 'views/phishingUsers/YouHaveBeenPhished';
import SubscriptionContact from 'views/subscriptions/SubscriptionContact';
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
        <Route path={''} index={route.index} element={<route.component />} key={key} />
      ) : route.children ? (
        <Route path={route.path} index={route.index} key={key}>
          {route.children ? developRoutes(route.children) : ''}
        </Route>
      ) : (
        <Route path={route.path} index={route.index} element={<route.component />} key={key} />
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
            <Route path="reward-claim/:id" element={<YouHaveBeenPhished />} />

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
            <Route
              path="mssp"
              element={
                <RequireAuth>
                  <DashboardLayout />
                </RequireAuth>
              }>
              {developRoutes(siderMsspRoutes)}
              <Route path="payment/:id" element={<SubscriptionPayment />} />
            </Route>
            <Route
              path="provider"
              element={
                <RequireAuth>
                  <DashboardLayout />
                </RequireAuth>
              }>
              {developRoutes(siderProviderRoutes)}
            </Route>
            <Route path="" element={<LandingLayout2 />}>
              <Route path="/" element={<LandingSaas />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="contact/:id" element={<SubscriptionContact />} />
            </Route>

            {/* <Route path="/users" element={<Users />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
