import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review: </label>
          <input onChange={this.handleChange} type="text" name="review"></input>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
