import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Accommodation from './pages/Accommodation';
import Activities from './pages/Activities';
import LowRopeArea from './pages/activities/LowRopeArea';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ScrollToTop from './ScrollToTop';
import Error404 from './Shared/Error404';
import GlobalStyle from './Shared/GlobalStyle';
import HeaderBar from './Shared/HeaderBar';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderBar stickyHeader />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/bookings`} component={Bookings} />
          <Route exact path={`${process.env.PUBLIC_URL}/accommodation`} component={Accommodation} />
          <Route exact path={`${process.env.PUBLIC_URL}/activities`} component={Activities} />
          <Route exact path={`${process.env.PUBLIC_URL}/shop`} component={Shop} />
          
          <Route exact path={`${process.env.PUBLIC_URL}/activities/low-rope-area`} component={LowRopeArea} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
