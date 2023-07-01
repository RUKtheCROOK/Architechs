import React, { useEffect, useState } from 'react';
import '../navbar.scss';
import { Link } from 'react-router-dom';
import DataService from '../../services/dataServices';
import { useContext } from 'react';
import DataContext from '../../global/dataContext';

function ScrollListener() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFixedTop, setIsFixedTop] = useState(false);
  const dataService = new DataService();
  const { loggedInUser } = useContext(DataContext);

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

  if (!loggedInUser) {
    return (
      <div className={`navbar ${isFixedTop ? 'fixed-top' : ''}`} id="navbar">
        <nav className="navbar navbar-expand-sm bg-body">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Architech</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll ms-auto" styles="--bs-scroll-height: 100px;">
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="/home">🏡 Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="/bids">Active Bidding</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="/login">Login</Link>
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
        <nav className="navbar navbar-expand-sm bg-body">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Architech</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll ms-auto" styles="--bs-scroll-height: 100px;">
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="/home">🏡 Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bids
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/bids">Active Bidding</Link></li>
            <li><Link className="dropdown-item" to="/bidCreation">Create Bid Post</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Feed
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/feed">Feed</Link></li>
            <li><Link className="dropdown-item" to="/feedCreation">Feed Creation</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="/profile">profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="/messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="/logout">logout</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
  }
export default ScrollListener;
