import React, { Component } from "react";

class State extends Component {
  render() {
    let { data, removeDone, checkedAllMessage } = this.props;
    // let checkedData = data.filter((item) => filter.done);
    let doneLength = data.filter((item) => item.done).length;
    return (
      <div className="sum">
        <label>
          <input
            type="checkbox"
            checked={data.length === doneLength}
            onChange={({ target }) => {
              checkedAllMessage(target.checked);
            }}
          />
          <span>选中全部</span>
        </label>
        {doneLength > 0 ? (
          <a
            onClick={() => {
              removeDone();
            }}
          >
            删除选中项
          </a>
        ) : (
          ""
        )}

        <p>
          当前选中{doneLength}项，共{data.length}条留言
        </p>
      </div>
    );
  }
}

export default State;
