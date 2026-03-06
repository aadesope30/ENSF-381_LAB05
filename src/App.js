import logo from './logo.svg';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  let isLoggedIn = false;
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Curret-Year is {currentYear}</p>
      {isLoggedIn? "welcome back" : "Please log in"}
    </div>
  );
}

export default App;
