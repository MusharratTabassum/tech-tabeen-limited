import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Banner from './components/Banner/Banner';
import MapContainer from './components/MapContainer/MapContainer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Banner></Banner>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Banner></Banner>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/service'>
            <Services></Services>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

