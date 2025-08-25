//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LoginForm from './Components/StudentLoginForm';
//import CourseList from './Components/CourseLists';
import CourseRegistration from './Components/CourseRegistration';
import { useState } from 'react';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
    <Header />
    {isLoggedIn ?
    (<CourseRegistration />) : 
    (<p>
      <ErrorBoundary>
      <LoginForm setIsLoggedIn={setIsLoggedIn}/>
      </ErrorBoundary>
    </p>)};
    </div>
  );
}

export default App;
