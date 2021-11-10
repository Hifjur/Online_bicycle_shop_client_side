import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import './App.css';
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute> */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
