
import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isLogin, setisLogin] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    if (username === "user" && password === "password") {
      setisLogin(true);
      seterrorMessage(null);
    } else {
      seterrorMessage("Invalid username or password");
      setisLogin(false);
    }
  };
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        {errorMessage ? <h2>{errorMessage}</h2> : null}
        <label>Username:</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isLogin ? <h2>Welcome, user!</h2> : null}
      
    </div>
  );
}

export default App;