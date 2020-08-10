import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../store/actions";

class CommentAdd extends Component {
  state = {
    username: "",
    content: "",
  };

  /**
   * 添加评论
   * */
  add = () => {
    //收集数据并封装成comment对象
    const { username, content } = this.state;
    const comment = { username, content };

    //判断合法性
    if (!comment.username || !comment.content) {
      alert("用户名或评论内容不能为空！");
    }

    //添加
    this.props.addComment(comment);

    //清除输入的数据
    this.setState({
      username: "",
      content: "",
    });
  };

  handleNameChange = (event) => {
    //获取input输入得得值
    const username = event.target.value;
    //更新state
    this.setState({ username });
  };
  handleContentChange = (event) => {
    //获取input输入得得值
    const content = event.target.value;
    //更新state
    this.setState({ content });
  };

  render() {
    //内部组件读取数据：state
    const { username, content } = this.state;

    return (
      <div>
        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input
                type="text"
                className="form-control"
                placeholder="用户名"
                value={username}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea
                className="form-control"
                rows="6"
                placeholder="评论内容"
                value={content}
                onChange={this.handleContentChange}
              />
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  type="button"
                  className="btn btn-default pull-right"
                  onClick={this.add}
                >
                  提交
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentAdd);
