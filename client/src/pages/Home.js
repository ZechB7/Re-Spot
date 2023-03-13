import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

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
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #000000' }}
        >
          <ReviewForm />
        </div>
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
    </main>
  );
};

export default Home;