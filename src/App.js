import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="App"> 
    <h1 className="title-app">Get A Way!</h1>
     <section>
       <ul className="continents-list">
          {this.showContinents()}
       </ul>
     </section>
    </div>
  );
  }
}

export default App;
