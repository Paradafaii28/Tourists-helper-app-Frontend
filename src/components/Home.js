import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


export default class Home extends Component {

    showContinents = () => this.props.continents.map(continent => (
        <Link to={`/destination/${continent.id}`}>
          <li key={continent.id} className="all-card">
            <img src= {continent.image_url}/>
          </li> 
        </Link>
      ))
    
    render() {
        return (
            <section>
            <ul className="continents-list">
                {this.showContinents()}
            </ul>
          </section>
        )
    }
}

