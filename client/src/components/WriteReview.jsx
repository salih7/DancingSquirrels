import React from 'react';
import $ from 'jquery';

class WriteReview extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentDidMount() {
    let context = this;
    $.get('/getUser', function(results) {
      if (results.user) {
        context.setState({
          loggedIn: results.user
        });
      }
    });
  }

handleOnReviewSubmit(e){
   var context= this;
   var summaryInput= $($(e.target).siblings(".summary" ));
   var reviewInput= $($(e.target).siblings(".review" ));
   var summary = summaryInput.val();
   var review = reviewInput.val();
   if(context.state.loggedIn && context.state.loggedIn.length>0){
    $.post('/post-review', {collectionId : context.props.collectionId,summary: summary, review: review, username: context.state.loggedIn})
        .done(result => {
          console.log(summaryInput);
          summaryInput.val("");
          reviewInput.val("");
        });
  }else{
    window.location.href='/#/login';
  }
}


    render() {
      return (
          <div className='review-container'>
            <label>Summary:</label>
            <input className='summary' type='text'></input><br/>
            <label className='label-review'>Review:</label>
            <textarea className='form-control review' rows='7' cols='50'></textarea><br/>
            <button onClick={(e) => this.handleOnReviewSubmit(e)} >Submit</button>
          </div>
      )

    }

  }

export default WriteReview;
