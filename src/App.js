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

  showContinents = () => this.state.continents.map(continent => (
      <li key={continent.id} className="all-card">
        <img src= {continent.image_url}/>
      </li> 
    ))
  

  render(){
  return (
    <Router>
      <div className="App"> 
      <h1 className="title-app"><img src = "https://i.ibb.co/MCr58nh/Handdrawn-Circle-Logo.png" /> GETAWAY</h1>
        <CostomNavbar/>
        <Route exact path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/blogging" component={Blogging} />
      <section>
        <ul className="continents-list">
            {this.showContinents()}
        </ul>
      </section>
      </div>
      </Router> 
    );
  }
}

export default App;
