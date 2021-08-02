import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return (
      <ul>
        {associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview} />
    })}
      </ul>
    );
  }
};

export default Reviews;