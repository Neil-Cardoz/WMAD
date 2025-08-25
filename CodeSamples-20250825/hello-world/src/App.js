//import logo from './logo.svg';
import './App.css';
import max from './Components/max';
import sum from './Components/sum';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MyButton from './Components/MyButton';

/*import TableOfNum from './Components';*/

function CalcMax()
{
  const r = max(222, 333);
  return (<div><p>Max : {r}</p></div>);
  
}
function CalcSum()
{
  const s = sum(123, 234);
  return (<div><p>Sum : {s}</p></div>);
}

function App() {
  
  return (
    <div className="App">
      <Header />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <NavBar />
      <p><MyButton/></p>
      <Footer />
      {/*<h1> My Hello World React App</h1>
        
      <p>
          Hello world!
      </p>
      
      <p><CalcMax/></p>
      <p><CalcSum/></p>*/}
    </div>
  );
}

export default App;
