import React from 'react';
import $ from 'jquery';
import ReviewEntryList from './ReviewEntryList.jsx';

class DisplayReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
    // var context= this;
    // this.props.fxn=function(){
    //   context.refreshReviews(context);
    // }
  }

  componentWillMount() {
    this.refresh();
  }

  refresh(){
    var context=this;
    $.get('/get-reviews', {collectionId: this.props.collectionId}, function(results) {
      context.setState({
        reviews: results
      });
    });
  }


  render() {
    return (
      <div>
      {
        this.state.reviews.length > 0
        ?
          <div className='review-wrapper'>
            {
              this.state.reviews.map((review, itr) =>
                 <ReviewEntryList key={itr} review={review}/>
              )
            }
          </div>
        : null
      }
    </div>
    );
  }
}

export default DisplayReview;
