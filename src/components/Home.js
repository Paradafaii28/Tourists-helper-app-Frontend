import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {

    showContinents = () => this.props.continents.map(continent => (
        <li key={continent.id} className="all-card">
          <img src= {continent.image_url}/>
        </li> 
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

