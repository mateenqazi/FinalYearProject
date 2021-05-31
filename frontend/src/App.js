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
import ViewPost from '../src/components/Post/viewPost'
import Setting from '../src/components/Setting'
import EditProfile from '../src/components/Setting/edit'
import jwt_decode from 'jwt-decode';
import { SET_USER } from './store/actions/types'
import PrivateRoute from '../src/common/PrivateRoute'
function App() {
  if (localStorage.token) {
    const decoded = jwt_decode(localStorage.token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem('token')
    } else {
      store.dispatch({ type: SET_USER, payload: decoded })
    }
  }
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact
            path="/"
            component={Home}
          />
          {/* <Route exact
            path="/"
            component={ViewPost}
          /> */}
          <Route
            exact
            path="/contact"
            component={Contact}
          />
          <PrivateRoute
            exact
            path="/post"
            component={RequestPost}
          />
          <PrivateRoute
            exact
            path="/setting/:id"
            component={Setting}
          />
          <PrivateRoute
            exact
            path="/setting/edit/:id"
            component={EditProfile}
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
