import {React, useState} from "react";
function LoginForm({setIsLoggedIn})
{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
    //e.preventDefault();
    if (userName && password)
    {
        alert(`Hello there, ${userName}, You've logged in successfully.`);
        setIsLoggedIn(true);
    }
    else
        alert(`Please enter user name and password.`);
    
    };
    return (
    <form onSubmit={handleSubmit}>
    <p>
      <input type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your user name..."
      />
    </p>
      <p>
      <input type = "password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password..."
      />
      </p>
      <p><button type="submit">Login</button></p>
    </form>);
  
}
export default LoginForm;