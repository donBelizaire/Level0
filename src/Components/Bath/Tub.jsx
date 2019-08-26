import React, { Component } from "react";
import "./Bath.css";

class Tub extends Component {
  render() {
    return (
      <div className="notes" onClick={this.props.deleteMethod}>
        {this.props.text}
      </div>
    );
  }
}
export default Tub;
