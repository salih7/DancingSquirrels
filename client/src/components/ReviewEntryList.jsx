import React from 'react';
import moment from 'moment';

const ReviewEntryList = ({review}) =>

  <div className='review-wrapper row'>
    <div className='col-md-3'>
      <div className="review-username">{review.username}</div>
      <div className="review-created-at">{moment(review.created_at).fromNow()}</div>
    </div>
    <div className="col-md-9">
      <div className="review-summary">{review.summary}</div>
      <div className="review-details">{review.review}</div>
    </div>
  </div>;

export default ReviewEntryList;
