import About from './components/aboutus';
import Contact from './components/contactus';
import Header from './components/header';
import Landing from './components/landing';
import Patner from './components/patners';
import Previous from './components/previous';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
      <Previous/>
      <Patner/>
      <Contact />
      <footer>
        <center><a href="#header" className="up">^</a></center>
      </footer>
    </div>
  );
}

export default App;
