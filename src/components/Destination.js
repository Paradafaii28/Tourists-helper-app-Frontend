import React, { Component } from 'react'

export default class Destination extends Component {

    showContinent = () => {
        return this.props.continents.find(continent => continent.id == this.props.match.params.id)
    }
    
    render() {
        let continent = this.props.continents.find((continent) => continent.id == this.props.match.params.id)
           return <li key={continent.id}  className="all-card">
                <h2> {continent.name}</h2>
                <img src ={continent.image_url}/>
            </li> 

        return (
            <section>
            <ul className="continents-list">
                {continent.name}
            </ul>
          </section>
        )
    }
}

