import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { REMOVE_REVIEW } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import './ReviewList.css';

import { QUERY_REVIEWS, QUERY_ME } from '../../utils/queries';

const ReviewList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
  // reviews = []
}) => {

  



  const [removeReview] = useMutation(REMOVE_REVIEW, {
    update(cache, { data: { removeReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });

        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [removeReview, ...reviews] },
        });
      } catch (e) {
        console.error(e);
      }
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeReview },
        });
      } catch (e) {
        console.error(e);
      }

    },
  });

  const handleRemoveReview = async (reviewId) => {
    //event.preventDefault();
    //const {reviewId} = event.target;
    console.log(`handleRemoveReview clicked! ${reviewId}`);
    try {
      const { data } = await removeReview({
        variables: {
          reviewId
        },
      });

      // setReviewText('');
    } catch (err) {
      console.error(err);
    }
  };

  if (!reviews) {
    return <h3>No reviews yet!</h3>;
  }

  const handleUpdateReview = async (reviewId) => {
    //event.preventDefault();
    //const {reviewId} = event.target;
    console.log(`handleUpdateReview clicked! ${reviewId}`);
    try {
      window.location.replace("EditReviewPage/" + reviewId);
    }
    // setReviewText('');
    catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="reviewList bg-dark">
      <div>
      {showTitle && <h3 className="penny">{title}</h3>}
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-3 mt-2">
            <h4 className="p-2 m-0">
              {showUsername ? (
                <Link
                  className="link bg-dark"
                  to={`/profiles/${review.reviewAuthor}`}
                >
                  {review.reviewAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this review on {review.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this review on {review.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2">
              <p>{review.reviewText}</p>
            </div>
            <Link
              className="tim rounded-0 button button-primary button-block button-squared"
              to={`/reviews/${review._id}`}
              >
              Join the discussion on this review.
            </Link>
            <Button className="rounded-0" onClick={() => handleUpdateReview(review._id)}>
              Update Review
            </Button>
            <Button className="rounded-0 rounded-bottom" onClick={() => handleRemoveReview(review._id)}>
              Remove Review
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList; 