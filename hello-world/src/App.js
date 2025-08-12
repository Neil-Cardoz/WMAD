import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      {/* The <title> tag should be in public/index.html, not here */}
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <img src={logo} alt="React Logo" style={{ width: '120px' }} />
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application with a navigation bar.</p>
      </div>
    </div>
  );
}

export default App;
