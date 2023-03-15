import React, {useState} from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Button } from'reactstrap';
import {REMOVE_REVIEW, UPDATE_REVIEW } from '../../utils/mutations';
=======
import { Button } from 'reactstrap';
import { REMOVE_REVIEW } from '../../utils/mutations';
>>>>>>> 5fe5526980436231acf014a4d5629485031d8b90
import { useMutation } from '@apollo/client';

import { QUERY_REVIEWS, QUERY_ME } from '../../utils/queries';

const ReviewList = ({
  // reviews,
  title,
  showTitle = true,
  showUsername = true,
  reviews = []
}) => {
<<<<<<< HEAD
  const [reviewData, setName] = useState('');
  const [updateReview, {error}] = useMutation(UPDATE_REVIEW);
=======
>>>>>>> 5fe5526980436231acf014a4d5629485031d8b90

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

  if (!reviews.length) {
    return <h3></h3>;
  }

  const handleUpdateReview = async (reviewId, reviewText) => {
    try {
      // console.log(`handleRemoveReview clicked! ${reviewId}`);
      const { data } = await updateReview({
        variables: {
          reviewText,
          reviewId,

        },
      })
   
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="reviewList">
      {showTitle && <h3 className="penny">{title}</h3>}
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-3">
            <h4 className="p-2 m-0">
              {showUsername ? (
                <Link
                  className="link"
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
              className="button button-primary button-block button-squared"
              to={`/reviews/${review._id}`}
            >
              Join the discussion on this review.
            </Link>
<<<<<<< HEAD
            <Button color="primary" onClick={() => handleUpdateReview(review._id)}>
              {/* Update Review, review id and review text */} Update Review
            </Button>
            <Button color="primary" onClick={()=>handleRemoveReview(review._id)}>
=======
            <Button color="primary" onClick={() => handleRemoveReview(review._id)}>
>>>>>>> 5fe5526980436231acf014a4d5629485031d8b90
              Remove Review
            </Button>
          </div>
        ))}
    </div>
  );
};

export default ReviewList; 