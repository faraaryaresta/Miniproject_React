import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return(
        // <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        //     <div className="container-fluid">
        //         <Link to="/" className="navbar-brand">My Students</Link>
        //         <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link to="/" className="nav-link">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/student" className="nav-link">All Students</Link>
        //                 </li>
        //             </ul>
        //             <div className="d-flex">
        //                 <Link to="/add" className="btn btn-warning">Add Students</Link>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <>
        <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light pt-2 ps-4 pe-3 shadow-sm">
            <div className="container">
            <Link className="navbar-brand ms-5 ps-5" to="#"><span className="text-e">SCHOOLS</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/student" className="nav-link">All Students</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to="/add" className="btn btn-warning">Add Students</Link>
                    </div>
            </div>
            </div>
        </nav>
        </>

    )
}