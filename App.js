import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App() {
    const cards = data.map(item => {
    return (
        <Card 
            key={item.title}
            {...item}
        />
    )
    })
    
    return (
        <div>
            <Navbar />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}