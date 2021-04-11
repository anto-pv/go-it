import { Route } from 'react-router-dom';
import About from './components/aboutus';
import Contact from './components/contactus';
import Eventd from './components/eventdet';
import Header from './components/header';
import Interns from './components/interns';
import Landing from './components/landing';
import Patner from './components/patners';
import Previous from './components/previous';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Header/>
        <Landing/>
        <Eventd/>
        <About/>
        <Previous/>
        <Patner/>
        <Contact />
        <footer>
          Go-IT@2021
          <div className="sitemap">
            <u>sitemap</u>
            <ul><li><a href="#header">Home</a></li>
            <li><a href="#aboutus">About us</a></li>
            <li><a href="/">Workshops</a></li>
            <li><a href="/interns">Internships</a></li></ul>
          </div>
        </footer>
        </Route>
        <Route path="/interns" exact>
          <Header/>
          <Interns/>
          <Contact/>
          <footer>
          Go-IT@2021
          <div className="sitemap">
            <u>sitemap</u>
            <ul><li><a href="#header">Home</a></li>
            <li><a href="#aboutus">About us</a></li>
            <li><a href="/">Workshops</a></li>
            <li><a href="/interns">Internships</a></li></ul>
          </div>
        </footer>
        </Route>
    </div>
  );
}

export default App;
