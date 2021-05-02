import './App.scss';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';

function App() {
  return (
    <div className = "App">
      <div className="sidebar">
        <NavBar/>
      </div>
      <div className="main-content">
        <Header/>
      </div>
    </div>
  );
}

export default App;
