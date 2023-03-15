import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';

import { QUERY_REVIEWS } from '../utils/queries';

import './home.css'; // import the css file

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  const filteredReviews = reviews.filter((review) => {
    return review.username?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    
    <main style={{ backgroundColor: '#778899', color: '#000000' }}>
      {/* searchUsernameBox */}
      <div className="col-8 col-md-9 mb-1">
        <h7 style={{fontSize:"20px",marginLeft:"25%"}}>Type in the search bar below to comment on each others playlists</h7>
      </div>
      <div className="flex-row justify-center">      
        <div className="col-12 col-md-8 mb-3">
          <div className="col-12 col-md-8 mb-3">
            <div className="input-group" style={{ width: '150%' }}>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search by username"
                aria-label="Search by username"
                aria-describedby="search-button"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ backgroundColor: 'white', color: '#778899', borderColor: 'black' }}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="search-button"
                style={{ backgroundColor: 'forestgreen', color: 'black', borderColor: 'forestgreen' }}
              >
                Search
              </button>
            </div>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewList
              reviews={filteredReviews}
              title="A penny for your review(s)..."
            />
          )}
        </div>
      </div>
      {/* body section */}
      <div className="applications">
        <div className="suggestions">
          <div className="genrespt1">
            <h7>Podcasts</h7>
          </div>
          <div className="test">
            <h7>Audiobooks</h7>
          </div>
          <div className="test">
            <h7>Live Events</h7>
          </div>
          <div className="test">
            <h7>Made For You</h7>
          </div>
          <div className="test">
            <h7>New Releases</h7>
          </div>
        </div>
        <div className="genres">
          <div className="test">
            <h7>Hip-Hop</h7>
          </div>
          <div className="test">
            <h7>Country</h7>
          </div>
          <div className="test">
            <h7>Latin</h7>
          </div>
          <div className="test">
            <h7>Rock</h7>
          </div>
          <div className="test">
            <h7>Electronic</h7>
          </div>
          <div className="test">
            <h7>R&B</h7>
          </div>
          </div>
          <div>
          <div className="test">
            <h7>Indie</h7>
          </div>
          <div className="test">
            <h7>Metal</h7>
          </div>
          <div className="test">
            <h7>Jazz</h7>
          </div>
          <div className="test">
            <h7>Classical</h7>
          </div>
          <div className="test">
            <h7>Alternative</h7>
          </div>
          <div className="test">
            <h7>Blues</h7>
          </div>
          </div>
      </div>
    </main>
  );
};

export default Home;