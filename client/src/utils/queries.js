import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      spotUser
      email
      reviews {
        _id
        reviewText
        createdAt
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getReviews {
    reviews {
      uri
      _id
      reviewText
      reviewAuthor
      createdAt
    }
  }
`;

export const QUERY_PLAYLIST = gql`
query Playlist($uri: String!) {
  playlist(uri: $uri) {
    uri
    reviewText
    _id
  }
}
`;

export const QUERY_SINGLE_REVIEW = gql`
  query getSingleReview($reviewId: ID!) {
    review(reviewId: $reivewId) {
      uri
      _id
      reviewText
      reviewAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      spotUser
      email
      reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;
