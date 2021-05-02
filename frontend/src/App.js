import './App.css';
import Home from './components/Home/index'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import ShopSingle from './components/ShopSingle/SingleShop'
import Thankyou from './components/Thankyou/Thankyou'
import About from './components/About/about'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer'
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import { Provider } from 'react-redux'
import store from './store'
import { NotificationContainer } from 'react-notifications';
import RequestPost from '../src/components/Post'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/contact"
            component={Contact}
          />
          <Route
            exact
            path="/post"
            component={RequestPost}
          />
          <Route
            exact
            path="/about"
            component={About}
          />
          <Route
            exact
            path="/shop"
            component={Shop}
          />
          <Route exact path="/cart" component={Cart}
          />
          <Route
            exact
            path="/checkout"
            component={Checkout}
          />
          <Route
            exact
            path="/thankyou"
            component={Thankyou}
          />
          <Route
            exact
            path="/item"
            component={ShopSingle}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/sign-up"
            component={Signup}
          />
          <Footer />
        </BrowserRouter>
        <NotificationContainer />
      </Provider>
    </div>
  );
}

export default App;
