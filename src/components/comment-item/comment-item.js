import React, { Component } from "react";
import "./comment-item.css";
import { deleteComment } from "../../store/actions";
import { connect } from "react-redux";

class CommentItem extends Component {
  //删除
  del = () => {
    const { comment, index } = this.props;
    if (window.confirm(`确定要删除${comment.username}得评论吗`)) {
      this.props.deleteComment(index);
    }
  };

  render() {
    //读取数据：props：组件外到组件内得数据
    let { comment } = this.props;

    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.del}>删除</a>
        </div>
        <p className="user">
          <span>{comment.username}</span>
          <span>说:</span>
        </p>
        <p className="centence">{comment.content}</p>
      </li>
    );
  }
}

export default connect(null, { deleteComment })(CommentItem);
