import React, { useEffect, useState } from 'react';
import '../navbar.scss';
import { Link } from 'react-router-dom';
import DataService from '../../services/dataServices';

function ScrollListener() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFixedTop, setIsFixedTop] = useState(false);

  useEffect(() => {
    const checkUserStatus = async () => {
      let dataService = new DataService();
      let user = await dataService.getLoggedInUser();
      setIsLoggedIn(user !== null);
    };

    checkUserStatus();

    const intervalId = setInterval(checkUserStatus, 500);

    

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsFixedTop(true);
      } else {
        setIsFixedTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isLoggedIn) {
    return (
      <div className={`navbar ${isFixedTop ? 'fixed-top' : ''}`} id="navbar">
        <nav className="navbar navbar-expand-lg bg-body">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              Architech
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="text-end">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
                <li className="nav-item">
                  <Link className="nav-link link" aria-current="page" to="/home">
                    🏡 Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link" aria-current="page" to="/bids">
                    Bids
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className={`navbar ${isFixedTop ? 'fixed-top' : ''}`} id="navbar">
        <nav className="navbar navbar-expand-lg bg-body">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Architech</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarScroll"> */}
                      <div className="text-end">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
                        <li className="nav-item">
                        <Link className="nav-link link" aria-current="page" to="/home">🏡 Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link link" aria-current="page" to="/bids">Bids</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link link" aria-current="page" to="/feed">feed</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link link" aria-current="page" to="/profile">profile</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link link" aria-current="page" to="/logout">logout</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Messages
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/messages">Direct Messages</Link></li>
                            <li><a className="dropdown-item" href="#">Group Messages</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Company Messages</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    </div>
                {/* </div> */}
            </nav>
    </div>
  );
  }
export default ScrollListener;
