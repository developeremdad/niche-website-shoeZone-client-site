import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import About from './Pages/Home/About/About';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import Contact from './Pages/Home/Contact/Contact';
import DetailsProduct from './Pages/Home/DetailsProduct/DetailsProduct';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/allProducts">
              <AllProducts />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path="/details/:productId">
              <DetailsProduct />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
