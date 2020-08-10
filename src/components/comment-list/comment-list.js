import React, { Component } from "react";
import "./comment-list.css";
import CommentItem from "../comment-item/comment-item";
import { deleteComment } from "../../store/actions";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    //读取数据：props：组件外到组件内得数据
    let { comments } = this.props;
    const display = comments && comments.length === 0 ? "block" : "none";

    return (
      <div>
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {comments &&
              comments.length > 0 &&
              comments.map((comment, index) => (
                <CommentItem comment={comment} key={index} index={index} />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
};
const mapDispatchToProps = (dispatch) => {
  return { deleteComment: dispatch(deleteComment()) };
};
const commentList = connect(mapStateToProps, mapDispatchToProps)(CommentList);
export default commentList;
