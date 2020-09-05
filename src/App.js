import React, { Component } from "react";
import Input from "./input";
import List from "./list";

class App extends Component {
  state = {
    data: [
      {
        id: 0,
        nickname: "昵称",
        content: "留言内容",
      },
      {
        id: 1,
        nickname: "昵称",
        content: "留言内容",
      },
    ],
  };

  addTodo = (newTodo) => {
    let { data } = this.state;
    data.unshift({
      id: Date.now(),
      title: newTodo,
    });
    this.setState({
      data,
    });
  };

  removeTodo = (id) => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => id !== item.id),
    });
  };

  render() {
    let { data } = this.state;
    return (
      <section className="wrap">
        <h2 className="title">留言板</h2>
        <Input addTodo={this.addTodo} />
        <List data={data} removeTodo={this.removeTodo} />
      </section>
    );
  }
}

export default App;
