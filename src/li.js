import React, { Component, createRef } from "react";

class Li extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      val: props.data.content,
    };
  }
  //   state = {
  //     edit: false,
  //   };
  editIpt = createRef();
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.edit && this.state.edit) {
      //  let input = document.querySelector(`.editInput${this.props.data.id}`);
      // input.focus();
      this.editIpt.current.focus();
    }
  }

  render() {
    let { data, removeTodo, changeDone, changeContent } = this.props;
    let { id, nickname, content, done } = data;
    let { edit, val } = this.state;
    return (
      //   <ul className="messageList">
      //     {data.map((item, index) => {
      //       return (
      <li className={edit ? "editing" : ""} key={id}>
        <h3>{nickname}</h3>
        <input
          type="checkbox"
          checked={done}
          onChange={(target) => {
            changeDone(id, target.checked);
          }}
        />
        <p
          onDoubleClick={() => {
            this.setState({
              edit: true,
            });
          }}
        >
          {content}
        </p>
        <textarea
          //   className={"editInput" + id}
          //   onBlur={() => {
          //     this.setState({
          //       edit: false,
          //     });
          //   }}
          ref={this.editIpt}
          value={val}
          onChange={({ target }) => {
            // changeContent(id, target.value);
            this.setState({
              val: target.value,
            });
          }}
          onBlur={() => {
            if (val.trim()) {
              changeContent(id, val);
            } else {
              this.setState({
                val: content,
              });
            }
            this.setState({
              edit: false,
            });
          }}
        ></textarea>
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
