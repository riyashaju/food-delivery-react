
import React from 'react';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Contacts from './pages/Contacts';
import Foods from './pages/Foods';
import Cart from './Cart';
import Navbar from './Components/NavBar/Navbar';
import { CartProvider, cartprovider} from "react-use-cart"; 
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
function App() {
  return (
    <CartProvider>
  <Router>
 <Navbar/>
  <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Contacts' component={Contacts} />
        <Route path='/Foods' component={Foods} />
        <Route path='/Cart' component={Cart} /> 
        <Route path='/SignUp' component={SignUp} /> 
        <Route path='/Signin' component={Signin} /> 
      </Switch>
  </Router>
  </CartProvider>
  );
}

export default App;
