import React, { useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
const Navbar = (props) => {
  console.log(props);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle ? (
        <div>
          <div style={{ padding: "20px", backgroundColor: "gray" }}>
            <Link
              to="/admin"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              Admin
            </Link>
            <Link
              to="/home"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              Home
            </Link>
          </div>
          <PrivateRoute path="/admin" component={Admin} exact={true} />
          <PrivateRoute path="/home" component={Home} exact={true} />
        </div>
      ) : (
        <>
          <div style={{ padding: "20px", backgroundColor: "gray" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </div>
          <Route
            path="/login"
            exact={true}
            render={() => {
              return <Login setToggle={setToggle} />;
            }}
          />
        </>
      )}
    </div>
  );
};

export default withRouter(Navbar);
