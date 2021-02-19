import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accommodation from './pages/Accommodation';
import Activities from './pages/Activities';
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
      <>
        <ScrollToTop />
        <HeaderBar stickyHeader />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/bookings'} component={Bookings} />
          <Route exact path={'/accommodation'} component={Accommodation} />
          <Route exact path={'/activities'} component={Activities} />
          <Route exact path={'/shop'} component={Shop} />
          <Route component={Error404} />
        </Switch>
      </>
      <GlobalStyle />
    </>
  );
}

export default App;
