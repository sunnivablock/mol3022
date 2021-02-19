import logo from './logo.svg';
import './App.css';
// import page from "./components/page.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <page></page> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bio prosjekt
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bio Prosjekt
        </a>
      </header>
    </div>
  );
}

export default App;
