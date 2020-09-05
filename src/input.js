import React, { Component } from "react";
class Input extends Component {
  state = {
    nicknameValue: "",
    contentValue: "",
  };
  render() {
    let { nicknameValue } = this.state;
    let { contentValue } = this.state;
    let { addTodo } = this.props;
    return (
      <div className="addMessage">
        <input
          type="text"
          placeholder="请输入昵称"
          value={nicknameValue}
          onChange={({ target }) => {
            this.setState({
              nicknameValue: target.value,
            });
          }}
        />
        {/* // onKeyDown={(e) => {
      //   if (e.keyCode === 13 && val.trim()) {
      //     console.log(val);
      //     addTodo(val);
      //     this.setState({
      //       val: "",
      //     });
      //   }
      // }} */}
        <textarea
          placeholder="请输入内容"
          value={contentValue}
          onChange={({ target }) => {
            this.setState({
              contentValue: target.value,
            });
          }}
        ></textarea>
        <button
          onClick={() => {
            let { nicknameValue } = this.state;
            let { contentValue } = this.state;
            if (nicknameValue.trim() && contentValue.trim()) {
              addTodo(nicknameValue, contentValue);
              this.setState({
                nicknameValue: "",
                contentValue: "",
              });
            }
          }}
        >
          提交留言
        </button>
      </div>
    );
  }
}

export default Input;
