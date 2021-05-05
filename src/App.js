import './App.scss';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className = "App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar/>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
      <div className="content">
      <Switch>
          <Route path="/" exact>
            <Header/>
          </Route>
          <Route path="/home" exact>
            <Header/>
          </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
        <Route path="/blogs" exact>
          <BlogsPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
      </Switch>
      </div>
      </div>
    </div>
  );
}

export default App;
