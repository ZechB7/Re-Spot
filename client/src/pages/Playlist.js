// import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import './Playlist.css'

import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Playlist = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { playlistId } = useParams();

  // const { loading, data } = useQuery(QUERY_PLAYLIST, {
  //   // pass URL parameter
  //   variables: { playlistId },
  // });

  // const playlist = data?.playlist || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="my-3">
      {/* playlist name */}
      <div className="playlistCard">
        <iframe
          className="playlist"
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
          width="752" 
          height="500" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
      <div className="col-12 col-md-10 mb-5">
        {/* <ReviewList
            reviews={user.reviews}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          /> */}
      </div>
      {/* {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ReviewForm />
          </div>
        )} */}
    </div>
  );
};

export default Playlist;

//gameplan
//use api call to create link for each playlist
// on playlist page check for params requested (which playlist uri id)
//use id to make query where playlist
// comments have playlist id 
// retrieve all coments thats hace the same id as playlist
// render those comments
// possible render embed

// future dev 
// save playlist