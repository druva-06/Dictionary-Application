import React from "react"
import { Link } from "react-router-dom"
import '../App.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="heading">
                <h2 className="title">Dictionary App</h2>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/history">History</Link>
            </div>
        </div>
    )
}

export default Navbar