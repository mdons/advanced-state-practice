import React, { Component } from "react";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
    return <div />;
  }
}
