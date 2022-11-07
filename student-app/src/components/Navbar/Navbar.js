import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return(
        <>
        <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light pt-2 ps-4 pe-3 shadow-sm">
            <div className="container">
            <Link className="navbar-brand ms-5 ps-5" to="/home"><span className="text-e">DayCare</span> SCHOOLS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/student" className="nav-link">Data Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link me-3">Contact</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <Link to="/add" className="btn btn-warning me-2">Add Students</Link>
                </div>
                <div className="d-flex">
                    <Link to="/" className="btn  btn-success">LogOut</Link>
                </div>
            </div>
            </div>
        </nav>
        </>

    )
}