import React, {PureComponent} from 'react';

export const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: ``,
        isDisabled: false,
        isError: false,
        errorMessage: ``,
      };

      this.inputChangeHandler = this.inputChangeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
    }

    inputChangeHandler(evt) {
      const {name, value} = evt.currentTarget;
      this.setState({[name]: value, isError: false, errorMessage: ``});
    }

    submitHandler(offerId, sendComment) {
      const {review, rating} = this.state;

      const commentId = offerId;

      this.setState({isDisabled: true});

      sendComment(commentId, {comment: review, rating})
        .then(() => {
          this.setState({review: ``, rating: ``, isDisabled: false});
        })
        .catch((err) => {
          const errorMessage = `${err.message}`;
          this.setState({isError: true, errorMessage, isDisabled: false});

          throw err;
        });
    }

    render() {
      const {review, rating, isDisabled, isError, errorMessage} = this.state;

      return (
        <Component
          {...this.props}
          review={review}
          rating={rating}
          isDisabled={isDisabled}
          isError={isError}
          errorMessage={errorMessage}
          onInputChange={this.inputChangeHandler}
          onSubmit={this.submitHandler}
        />
      );
    }
  }

  WithCommentForm.propTypes = {};

  return WithCommentForm;
};
