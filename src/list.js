import React, { Component } from "react";

class List extends Component {
  render() {
    let { data, removeTodo } = this.props;
    return (
      <ul className="messageList">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.nickname}</h3>
              <p>{item.content}</p>
              <a
                onClick={() => {
                  removeTodo(item.id);
                }}
              >
                删除
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
