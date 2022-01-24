import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../src/components/css/style.css';
import '../src/components/css/header.css';
import '../src/components/css/SpecialOffer.css';
import '../src/components/css/DealsOfTheDay.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile/profile';
import ProfileNoOrder from './Profile/P-components/profileNoOrder';
import ProfileOrders from './Profile/P-components/profileOrders';
import Address from './Profile/P-components/address';
import Payments from './Profile/P-components/payments';
import trackOrder from './Profile/P-components/trackOrder';
import notifications from './Profile/P-components/notifications';
import reportWebVitals from './reportWebVitals';
import landingPage from './components/LandingPage';
import Login from '../src/login';
import Menu from './delivery-dashboard/main-menu';
import RestaurantDetail from './Pages/RestaurantDetail';
import Checkout from './Pages/Checkout';
import CartProvider from './store/cart-context';
import SignUp from '../src/signUp';
import ScrollToTop from './components/common/util/ScrollToTop';
import Blog from './Pages/Blog';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={landingPage} />{' '}
            <Route path="/explore" component={Home} />
            <Route path="/restaurant/:rid" component={RestaurantDetail} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/orders" component={ProfileNoOrder} />
            <Route path="/orders/1" component={ProfileOrders} />
            <Route path="/address" component={Address} />
            <Route path="/payments" component={Payments} />
            <Route path="/track-order" component={trackOrder} />
            <Route path="/notifications" component={notifications} />
            <Route path="/login" component={Login} />
            <Route path="/menu" component={Menu} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/cart" component={Checkout} />
            <Route path="/blogs" component={Blog} />
          </ScrollToTop>
        </Switch>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a functio
reportWebVitals();
