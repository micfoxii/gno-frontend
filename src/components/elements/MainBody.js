import React from 'react'
import Locations from '../locations/Locations.js'
import Destinations from '../destinations/Destinations.js'

const MainBody = () => {
    return (
        <div>
            <h3> All Locations </h3>
            <Locations />
            <h3> All Destinations </h3>
            <Destinations />
        </div>
    )
}

export default MainBody