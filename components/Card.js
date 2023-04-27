import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.coverImg} className="card--image"/>
            <div className="card--info">
                <img src="../images/ping.svg" className="card--ping"/>
                <span className="card--location">{props.location}</span>
                <a href={props.googleMapsUrl} className="card--google">View on Google Maps</a>
                <div className="card--title">{props.title}</div>
                <div className="card--date">{props.startDate} - {props.endDate}</div>
                <div className="card--description">{props.description}</div>
            </div>
        </div>
    )
}