//import logo from './logo.svg';
//import symbi_logo from './symbi_logo.png'
import './App.css';
import { useRef} from 'react';
import Header from './Components/Header';
import Counter from './Components/Counter';
//import Calculator from './Components/Calculator';
//import LoginForm from './Components/LoginForm';
//import SampleForm from './Components/SampleForm';
import Person1 from './Components/ContextEx';

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const countRef = useRef(0);
  countRef.current++;
  return (
    <div className="App">
      
      <Header />
      <p>Reference count: {countRef.current}</p>
      <Counter />
      <Person1 />
      
      {/*{isLoggedIn ? (
        <SampleForm />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}*/}
    </div>
  );
}

export default App;
