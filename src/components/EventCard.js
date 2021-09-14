import React, {useState, useEffect} from 'react'
import axios from 'axios';

import '../styles/listings.css'

const EventCard = () => {
    const [eventData, setEventData] = useState([])

    const token = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0'

    
    useEffect(() => {
    axios
    .get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${token}&countryCode=GB&city=Manchester`)
    .then(res => setEventData(res.data._embedded.events)
    
    )}, [])

        return(
            <div>
                {eventData.map((listing) => {
        return(
        <ul className="listings">
        <li key={listing.name}>{listing.name}</li>
        <div div className="images-align">
        <img key={listing.images[4]} className="images" src={listing.images[4].url} alt="band" />
        </div>
        <li key={listing._embedded.venues[0].name}>{listing._embedded.venues[0].name}</li>
        <li key={listing.dates.start.localDate}>{listing.dates.start.localDate}</li>
        <li key={listing.dates.start.localTime}>{listing.dates.start.localTime}</li>
        <a key={listing.url} target="#" href={listing.url}>Buy Tickets</a>
        </ul>
        )
    })}
            </div>
        )}


export default EventCard

