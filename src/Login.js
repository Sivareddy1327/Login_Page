import React, { useState } from "react";
import validator from "validator";

const Login = (props) => {
  const { setToggle } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formerrors, setFormerrors] = useState({});
  const errors = {};
  const data = {
    Email: "sivareddychidipudi@gmail.com",
    Password: "Siva123456",
    Username: "sivareddy",
    Mobile: "9000813272",
  };
  localStorage.setItem("login", JSON.stringify(data));
  const runvalidation = () => {
    if (email.trim().length == 0) {
      errors.email = "cannot be blank";
    } else if (!validator.isEmail(email)) {
      errors.email = "email must be XYZ@gamil.com format";
    }

    if (password.trim().length <= 8) {
      errors.password = "password must be more than 8 characters";
    }
  };

  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runvalidation();
    if (Object.keys(errors).length == 0) {
      const formData = {
        Email: email,
        Password: password,
      };
      const parsedata = JSON.parse(localStorage.getItem("login"));
      console.log(formData);
      if (
        formData.Email === parsedata.Email &&
        formData.Password === parsedata.Password
      ) {
        setToggle(true);
        alert("successfully loggedin");
      } else {
        alert("please enter correct login credentials");
      }
      setFormerrors({});
    } else {
      setFormerrors(errors);
    }
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid green",
          backgroundColor: "bisque",
          marginTop: "50px",
          borderRadius: "4px",
          width: "40%",
          marginLeft: "22%",
          marginTop: "",
          padding: "10px",
        }}
      >
        <div>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={handleChangeemail}
              style={{ marginLeft: "10px" }}
            />
            <br />
            {formerrors && (
              <span style={{ color: "red" }}>{formerrors.email}</span>
            )}
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={handleChangepassword}
              style={{ marginLeft: "10px" }}
            />
            <br />
            {formerrors && (
              <span style={{ color: "red" }}>{formerrors.password}</span>
            )}
            <br />
            <input
              type="submit"
              value="login"
              style={{
                backgroundColor: "gray",
                borderRadius: "4px",
                color: "white",
              }}
            />
          </form>
        </div>
      </div>
      <div>
        <h3>Sample credentials</h3>
        <h4>Email Id : sivareddychidipudi@gmail.com</h4>
        <h4>Password : Siva123456</h4>
      </div>
    </div>
  );
};

export default Login;
