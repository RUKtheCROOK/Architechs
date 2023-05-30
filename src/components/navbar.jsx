// this is the navbar component

import './navbar.scss' // import the stylesheet
import { Link } from "react-router-dom"; // import the react-router-dom module

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar scroll</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">🏡 Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/bids">Bids</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/feed">feed</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/profile">profile</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/signup">signup</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Messages
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/messages">messages</Link></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;