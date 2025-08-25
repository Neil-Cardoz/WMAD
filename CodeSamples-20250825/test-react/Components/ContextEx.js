import { createContext, useContext } from "react";
const UserContext = createContext();

function Person1() {
  const user = "Pratima Joshi";

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Person2 />
    </UserContext.Provider>
  );
}

function Person2({user = "Priya Kulkarni"}) {
  return (
    <div>
      <h1>{`Hello ${user}!`}</h1>
      <Person3 />
    </div>
  );
}

function Person3({user="John P."}) {
  return (
    <div>
      <h1>{`Hello ${user}!`}</h1>
      <Person4 />
    </div>
  );
}

function Person4({user = "Sam Altman"}) {
  return (
    <div>
      <h1>{`Hello ${user}!`}</h1>
      <Person5 />
    </div>
  );
}

function Person5() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{`Hello ${user} again!`}</h1>
    </div>
  );
};
export default Person1;