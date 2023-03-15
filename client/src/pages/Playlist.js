import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

import { QUERY_REVIEWS, QUERY_PLAYLIST } from '../utils/queries';

const Playlist = () => {

  const { uri } = useParams();
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_PLAYLIST, { variables: { uri: uri } });
  const reviews = data?.reviews || [];
  console.log(data);
  const user = data?.me || data?.user || {};
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <iframe
        src={`https://open.spotify.com/embed/playlist/${uri}?utm_source=generator`}
        width="100%" height="250" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
      </iframe>
      <div className="col-12 col-md-10 mb-5">
        <ReviewList
          reviews={data.playlist}
          title={`${user.username}'s thoughts...`}
          showTitle={false}
          showUsername={false}
        />
      </div>
      <div>
        {!userParam && (
          <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }} >
            <ReviewForm uri={uri} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Playlist; 