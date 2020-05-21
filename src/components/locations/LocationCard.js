import React from 'react'
import { Link } from 'react-router-dom'

const LocationCard = ({ location }) => {
    return (
        location ?
        <div> 
            <h3> {location.attributes.city_name} </h3>
        </div> :
        <p> Locations Have Not Populated </p>
    )
}

export default LocationCard