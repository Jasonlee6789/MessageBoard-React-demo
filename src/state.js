import React, { Component } from "react";

class State extends Component {
  render() {
    let { data, removeDone } = this.props;
    let doneLength = data.filter((item) => item.done).length;
    return (
      <div className="sum">
        <label>
          <input
            type="checkbox"
            // checked={done}
            // onChange={(target) => {
            //   changeDone(id, target.checked);
            // }}
          />
          <span>选中全部</span>
        </label>
        <a
          onClick={() => {
            removeDone();
          }}
        >
          删除选中项
        </a>
        <p>当前选中{doneLength}项，共3条留言</p>
      </div>
    );
  }
}

export default State;
