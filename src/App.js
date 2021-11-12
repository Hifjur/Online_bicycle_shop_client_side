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
import Bikes from "./Pages/Shared/Bikes/Bikes";
import Footer from "./Pages/Shared/Footer/Footer";
import Purchase from "./Pages/Purchase/Purchase";
import Payment from "./Pages/Payment/Payment";

import Orders from "./Pages/Dashboard/Oders/Orders";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import AddPhoto from "./Pages/AddPhoto/AddPhoto";

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
            <Route path="/bikes">
              <Bikes></Bikes>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/social">
              <AddPhoto></AddPhoto>
            </PrivateRoute>
            
            <PrivateRoute path="/purchase/:_id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
