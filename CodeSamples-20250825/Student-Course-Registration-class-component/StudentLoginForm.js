import {React, useState} from "react";
export var isLoggedIn;
function LoginForm({setIsLoggedIn})
{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [yearBranch, setYearBranch] = useState("");
    const [error, setError] = useState("");

    const validateInputs=()=>{
    if (!userName.trim()) return "Username is required.";
    if (!password.trim()) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };
    
  const handleSubmit = (e) => 
  {
    e.preventDefault();
    setError("");
    try{
      const validationError = validateInputs();
      if (validationError) {
        setError(validationError);
        return;
      }
      if ((userName && password))
      {
        alert(`Hello there, ${userName}, You've logged in successfully.\n
          Your year and branch is: ${yearBranch}`);
        setIsLoggedIn(true);

    }
    /*else
        setError("Invalid user name or password.");*/

    }
    catch(err)
    {
      console.error("Unexpected error during login:", err);
      setError("An unexpected error occurred. Please try again.");
    }
    
    
  };
  return (
  <form onSubmit={handleSubmit}>
    <h1>Login to the Registration page</h1>
    {error && <p style={{ color: "red" }}>{error}</p>}
    <p>
    <input 
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
    <p>
        <label>Select Your Year and Branch: </label>
      <select value={yearBranch} onChange={(e) => setYearBranch(e.target.value)}>
        <option value="">Year and Branch</option>
        <option value="SYAIML">SY BTech AIML</option>
        <option value="TYAIML">TY BTech AIML</option>
        <option value="LYAIML">Final Year AIML</option>
        <option value="SYCSE">SY BTech CSE</option>
        <option value="TYCSE">TY BTech CSE</option>
        <option value="LYCSE">Final Year CSE</option>
      </select>
      </p>

    <p><button type="submit">Login</button></p>
  </form>)
}
export default LoginForm;