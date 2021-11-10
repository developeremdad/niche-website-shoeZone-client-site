import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import About from './Pages/Home/About/About';
import AllServices from './Pages/Home/AllServices/AllServices';
import Contact from './Pages/Home/Contact/Contact';
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

            <Route path="/allServices">
              <AllServices />
            </Route>

            <PrivateRoute path="/contact">
              <Contact />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

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
