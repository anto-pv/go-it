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
          <center><a href="#header" className="up">^</a></center>
        </footer>
        </Route>
        <Route path="/interns" exact>
          <Interns/>
          <footer>
          <center><a href="#header" className="up">^</a></center>
        </footer>
        </Route>
    </div>
  );
}

export default App;
