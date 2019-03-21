import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.reviewsArr = props.product.reviewsArr;
    this.state = {
      showReviews: false
    };
  }

  toggleReviews = () => {
    this.setState({
      showReviews: !this.state.showReviews
    });
  };

  render() {
    let display;
    if (this.state.showReviews) {
      display = this.reviewsArr.map((review, i) => {
        const stars = [];
        for (let j = 0; j < review.rating; j++) {
          stars.push(<span key={j} className="glyphicon glyphicon-star" />);
        }
        return (
          <div key={i}>
            <div>{stars}</div>
            <div>{review.description}</div>
          </div>
        );
      });
    }
    return (
      <div>
        <button onClick={this.toggleReviews}>show reviews</button>
        {display}
      </div>
    );
  }
}

Reviews.propTypes = {
  product: PropTypes.object
};
