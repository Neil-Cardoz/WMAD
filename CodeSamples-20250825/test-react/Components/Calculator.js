import { React, useState } from "react";

function Calculator()
{
    const [op, setOp] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleSubmit = (e) =>
    {     
        
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        const operation = parseInt(op);
        var result = 0;
        switch(operation)
        {
            case 1:
                result = number1 + number2;
                alert(`Addition of the numbers is:${result} \n`);
                break;
            case 2:
                result = number1 - number2;
                alert(`Difference between the numbers is: ${result}\n`);
                break;
            case 3:
                result = number1 * number2;
                alert(`Product of the numbers is: ${result}\n`);
                break;
            case 4:
                result = number1 / number2;
                alert(`Division of the numbers is: ${result}\n`);
                break;
            default:
                alert(`Invalid operation.`);
                break;

        }




    }
    return(
        <form onSubmit={handleSubmit}>
        <p>
        <label>Select the arithmetic operation: </label>
      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="0">--Arithmetic Operation--</option>
        <option value="1">Addition</option>
        <option value="2">Subtraction</option>
        <option value="3">Multiplication</option>
        <option value="4">Division</option>
      </select>
      </p>
      <p>
      <input 
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter the first number:"
      />
      </p>
      <p>
      <input 
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter the second number:"
      />
      </p>
      <p><button type="submit">Calculate</button></p>
      </form>
    );

}
export default Calculator;