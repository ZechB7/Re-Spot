import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Footer.css';
  const whiteTextStyle = {
    color: '#ffffff'
  };
  // const linkStyle = {
  //   color: '#006400'
  // };

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className="thanks" style={whiteTextStyle}>
           Made with <a href = "https://reactjs.org/">React</a>, <a href = "https://graphql.org/">GraphQL</a>, <a href = "https://mongoosejs.com/docs/">Mongoose</a><br />
          Styled with <a href = "https://primereact.org/">PrimeReact</a><br />
          by <a href = "https://github.com/Nick-McCarthy/Re-Spot/graphs/contributors">the reSpot team</a>.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
