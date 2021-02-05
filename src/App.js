import './styles/App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Internship from './pages/Internship';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/internship" component={Internship}/>
    </div>
  );
}

export default App;
