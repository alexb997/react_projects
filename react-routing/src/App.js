import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ItemDetails from './itemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path = "/" exact component ={Home} />
          <Route path = "/about" component ={About} />
          <Route path = "/shop" exact component ={Shop}/>
          <Route path = "/shop/:id" component ={ItemDetails}/>
        </Switch>
      </div>
    </Router>
  );
}
const Home =() =>(
  <div>
    <h1>Home Screen</h1>
  </div>
)

export default App;
