import React from 'react'
import { Link } from 'react-router-dom'

const LocationCard = ({ location }) => {
    debugger
    console.log("location card:", location)
    return (
        location.attributes.destinations.length > 0 ?
        <div> 
            <h3> {location.city_name} </h3>
            <h4> Will Populate Destinations </h4>
        </div> :
        <div>
            <h3> {location.attributes.city_name} </h3>
            <p> Locations Have Not Populated </p>
       </div>
        
    )
}

export default LocationCard