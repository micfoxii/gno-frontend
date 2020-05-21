import React from 'react'
import { Link } from 'react-router-dom'

const LocationCard = ({ loc }) => {
    return (
        loc.attributes.destinations.length > 0 ?
        <div> 
            <h3> {loc.attributes.city_name} </h3>
            <h4> Will Populate Destinations </h4>
        </div> :
        <p> Destinations Have Not Populated </p>
    )
}

export default LocationCard