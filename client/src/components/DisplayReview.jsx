import React from 'react';
import $ from 'jquery';

class DisplayReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews:[]};

  }

  componentWillMount(){
    let context = this;
      $.get('/get-reviews', {collectionId:context.props.collectionId}, function(results) {
        context.setState({
          reviews:results
        });
      });

    }

    render() {
      return (
          <div>
        {
          this.state.reviews.length > 0
          ?
          <div>

              <div className='review-wrapper'>
                  {
                    this.state.reviews.map((review, itr) => {
                      return (
                        <div key={itr}>
                          <div>
                          <h4>{review.summary}</h4>
                          </div>
                          <div>
                          {review.review}
                          </div>

                        </div>
                      );
                    })
                  }
              </div>
          </div>
          : null
        }
      </div>

      )

    }

  }

export default DisplayReview;
