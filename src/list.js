import React, { Component } from "react";
import Li from "./li";

class List extends Component {
  render() {
    let { data } = this.props;
    return (
      <ul className="messageList">
        {data.map((item) => (
          <Li key={item.id} {...this.props} data={item} />
        ))}
      </ul>
    );
  }
}

export default List;
