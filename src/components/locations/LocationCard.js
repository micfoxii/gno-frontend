import React from 'react'
import { Link } from 'react-router-dom'

const LocationCard = ({ location }) => {
    return (
        location.attributes.destinations.length > 0 ?
        <div> 
            <h3> {location.attributes.city_name} </h3>
            <h4> Will Populate Destinations </h4>
        </div> :
        <p> Destinations Have Not Populated </p>
    )
}

export default LocationCard