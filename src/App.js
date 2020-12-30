import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Destination from './components/Destination'
import Blogging from './components/Blogging'
import CostomNavbar from './components/CostomNavbar'


class App extends Component {

  state = {
    continents: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/continents')
      .then(res => res.json())
      .then(continents => this.setState({continents}))
  }

  render(){
  return (
    <Router>
      <div className="App"> 
        <h1 className="title-app">GETAWAY</h1>
        <CostomNavbar/>
        <Route exact path='/'>
          <Home continents={this.state.continents}/> 
        </Route>
        <Route path='/destination/:id' render={(props) => <Destination continents={this.state.continents} {...props}/>} />
        <Route path='/blogging' component={Blogging} />
      </div>
    </Router> 
    );
  }
}

export default App;
