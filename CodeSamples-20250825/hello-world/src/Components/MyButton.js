import React from "react";
function MyButton()
{
  const handleClick = (value) => {
    alert(`Hello, ${value}`);
  };
  return (
    <div>
      <button onClick={() => handleClick('Pratima')}>Click Me!</button>
     </div>
  );
}
export default MyButton;