import React from 'react'
import { Link } from 'react-router-dom'

const LocationCard = ({ loc }) => {
    console.log("location card:", loc)
    return (
        loc ?
        <div> 
            <h3> {loc.attributes.city_name}, {loc.attributes.state_name}, {loc.attributes.country_name}</h3>
            <h4> ID: {loc.id} </h4>
        </div> :
        <p> Destinations Have Not Populated </p>
    )
}

export default LocationCard