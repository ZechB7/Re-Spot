import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import SearchBar from '../SearchBar';
import './Header.css'; // import the stylesheet

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-black mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="" to="/" style={{ color: 'green', textDecoration: 'none' }}>
            <h1 className="m-0 text-green header-title">Spotify Playlist Review</h1>
          </Link>
          <p className="m-0 text-white header-subtitle">Discuss your peers playlist.</p>
        </div>

        <div>
          {Auth.loggedIn() ? (
            <>
              <SearchBar />
              <Link className="btn btn-lg m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn styled-button btn-lg m-2" onClick={logout}>
                Logout
              </button>
            </>)
            : (
              <>
                <Link className="btn styled-button btn-lg m-2" to="/login">
                  Login
                </Link>
                <Link className="btn styled-button btn-lg m-2" to="/signup">
                  Signup
                </Link>
              </>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
