import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";


function TravelCard(props) {
    // console.log(props)
    return (
        <div className="Travel">
            <img className="travel-img" src={props.imageUrl}></img>
            <div className="travel-card-wrapper">
                <div className="header"><FaMapMarkerAlt className="icon" /> {props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></div>
                <div className="tavel-title">{props.title}</div>
                <div className="time-date">{`${props.startDate} - ${props.endDate}`}</div>
                <div className="travel-discription">{props.description}</div>
            </div>
        </div>
    )
}

export default TravelCard;