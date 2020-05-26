import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => {
    console.log("destination card:", destination)
    return (
        destination ?
        <div> 
            <h3> {destination.attributes.name}</h3>
            <h4> ID: {destination.id} </h4>
        </div> :
        <p> Destinations Have Not Populated </p>
    )
}

export default DestinationCard