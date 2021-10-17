import React from "react";

const Admin = (props) => {
  const admindata = JSON.parse(localStorage.getItem("login"));
  console.log(admindata);
  return (
    <div>
      <h1>Admin Details</h1>
      <h3>Email : {admindata.Email}</h3>
      <h3>Username : {admindata.Username}</h3>
      <h3>Mobile : {admindata.Mobile}</h3>
    </div>
  );
};
export default Admin;
