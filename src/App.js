import React, { Component, Fragment } from "react";
import Input from "./input";
import List from "./list";
import State from "./state";

class App extends Component {
  state = {
    data: [
      {
        id: 0,
        nickname: "昵称",
        done: true,
        content: "留言内容1",
      },
      {
        id: 1,
        nickname: "昵称",
        done: true,
        content: "留言内容2",
      },
    ],
  };
  //添加留言
  addTodo = (nicknameValue, contentValue) => {
    let { data } = this.state;
    // data.unshift({
    //   id: Date.now(),
    //   nickname: nicknameValue,
    //   done: false,
    //   content: contentValue,
    // });
    this.setState({
      data: [
        {
          id: Date.now(),
          nickname: nicknameValue,
          done: false,
          content: contentValue,
        },
        ...data,
      ],
    });
  };
  //选中留言
  changeDone = (id, done) => {
    console.log(id);
    let { data } = this.state;
    data.forEach((item) => {
      if (item.id === id) {
        item.done = done;
      }
    });
    this.setState({
      data,
    });
  };
  //编辑留言
  changeContent = (id, content) => {
    let { data } = this.state;
    data.forEach((item) => {
      if (item.id === id) {
        item.content = content;
      }
    });
    this.setState({
      data,
    });
  };
  //删除留言
  removeTodo = (id) => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => id !== item.id),
    });
  };
  //全选
  checkedAllMessage = (done) => {
    let { data } = this.state;
    data.forEach((item) => {
      item.done = done;
    });
    this.setState({
      data,
    });
  };
  //删除选中项
  removeDone = () => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => !item.done),
    });
  };

  render() {
    let { data } = this.state;
    return (
      <section className="wrap">
        <h2 className="title">留言板</h2>
        <Input addTodo={this.addTodo} />
        {data.length > 0 ? (
          <Fragment>
            <List
              data={data}
              removeTodo={this.removeTodo}
              changeDone={this.changeDone}
              changeContent={this.changeContent}
            />
            <State
              data={data}
              removeDone={this.removeDone}
              checkedAllMessage={this.checkedAllMessage}
            />
          </Fragment>
        ) : (
          ""
        )}
      </section>
    );
  }
}

export default App;
