import './App.scss';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className = "App">
      <div className="sidebar">
        <NavBar/>
      </div>
      <div className="main-content">
        <Switch>
        <Route path="/" exact>
                <Header/>
              </Route>
              <Route path="/home" exact>
                <Header/>
              </Route>
        </Switch>
      <div className="content">
      <Switch>
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
