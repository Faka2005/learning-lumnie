import React from "react";

const LoginModals=()=> {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default LoginModals;
