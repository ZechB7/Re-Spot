import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import API from '../../utils/API';
// import axios from 'axios';

const UserPlayList = ({ spotUser }) => {

  const [result, setResult] = useState({});
  // const [search, setSearch] = useState('');

  const searchUser = (user) =>
    API.search(user)
      .then((res) => {
        // console.log(res.data);
        setResult(res.data)
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    searchUser(spotUser);
  }, []);

  const { public_playlists: playlists } = result;

  return (
    <div>
      {
        (playlists?.length && spotUser) ? <div>
          {playlists.map((playList) => (<div id="embed-iframe">
            <iframe 
            key={playList.uri.replace('spotify:playlist:', '')} 
            src={`https://open.spotify.com/embed/playlist/${playList.uri.replace('spotify:playlist:', '')}?utm_source=generator`} 
            width="100%" height="155px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
            </iframe>

            <Link
              style={{}}
              className="btn btn-primary btn-block"
              to={`/playlist/${playList.uri.replace('spotify:playlist:', '')}`}
            >
              Join the discussion on this playlist.
            </Link>

          </div>
          ))}
        </div> : (<h3>No playlist</h3>)
      }
    </div>
  );
};

export default UserPlayList;