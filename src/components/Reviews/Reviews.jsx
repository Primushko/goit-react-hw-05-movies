import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import {
  Author,
  NoReviewsText,
  Review,
  ReviewHeader,
  ReviewList,
  ReviewListItem,
  Wrapper,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <Wrapper>
      <ReviewHeader>Reviews</ReviewHeader>
      {reviews.length ? (
        <ReviewList className="reviews-container">
          {reviews.map(review => (
            <ReviewListItem className="review-card" key={review.id}>
              <Author>Author: {review.author}</Author>
              <Review>{review.content}</Review>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsText>
          Ми не маємо до цього фільму ще жодної рецензії.
        </NoReviewsText>
      )}
    </Wrapper>
  );
};
export default Reviews;
