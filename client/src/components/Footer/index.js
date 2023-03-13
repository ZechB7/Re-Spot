import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

  const blackTextStyle = {
    color: 'black'
  };
  const linkStyle = {
    color: '#006400'
  };

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 style={blackTextStyle}>
           Made with <a href = "https://reactjs.org/" style={linkStyle}>React</a>, <a href = "https://graphql.org/" style={linkStyle}>GraphQL</a>, <a href = "https://mongoosejs.com/docs/" style={linkStyle}>Mongoose</a><br />
          Styled with <a href = "https://primereact.org/" style={linkStyle}>PrimeReact</a><br />
          by <a href = "https://github.com/Nick-McCarthy/Re-Spot/graphs/contributors" style={linkStyle}>the reSpot team</a>.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
