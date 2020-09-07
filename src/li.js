import React, { Component } from "react";

class Li extends Component {
  render() {
    let { data, removeTodo, changeDone } = this.props;
    let { id, nickname, content, done } = data;
    return (
      //   <ul className="messageList">
      //     {data.map((item, index) => {
      //       return (
      <li className="editing" key={id}>
        <h3>{nickname}</h3>
        <input
          type="checkbox"
          checked={done}
          onChange={(target) => {
            changeDone(id, target.checked);
          }}
        />
        <p>{content}</p>
        <a
          onClick={() => {
            removeTodo(id);
          }}
        >
          删除
        </a>
      </li>
      //       );
      //     })}
      //   </ul>
    );
  }
}

export default Li;
