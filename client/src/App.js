import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel'
import Dashboard from './components/Dashoard';
import Listusers from './components/Listing/Listusers';
import Listroles from './components/Listing/Listroles';
import Listorg from './components/Listing/Listorg';
import Landing from "./components/Landing";
import Employee from './components/Employee';
import Role from './components/Role';
import Organization from './components/Organization';
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
          <Navbar /> 
          <Route exact path="/" component={Landing} />
          <section className='container'>
          <Switch>
            <Route exact path="/adminpanel" component={AdminPanel} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/listemployee' component={Listusers} />
            <Route exact path='/listroles' component={Listroles} />
            <Route exact path='/listorg' component={Listorg} />
            <Route exact path='/employee' component={Employee} />
            <Route exact path='/role' component={Role} />
            <Route exact path='/organization' component={Organization} />

          </Switch> 
          </section> 
    </Router>
    </div>
  );
}

export default App;
