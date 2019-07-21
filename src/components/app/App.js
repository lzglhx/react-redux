import React, {Component} from 'react'
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component {

  //初始化state
  state = {
    comments: [
      { username: 'Tom', content: 'react太简单了!'},
      { username: 'Jack', content: 'react太难了!'}
    ]
  }

  //添加评论
  addComment = (comment) => {
    //读取comments
    const  {comments} = this.state
    comments.push(comment)
    //更新state
    this.setState({comments})
  }

  //删除评论
  deleteComment = (index) => {
    //读取数据
    const {comments} = this.state
    comments.splice(index, 1)
    //更新数据
    this.setState({comments})
  }

  render () {
    //取出数据，state:组件内读取数据
    const {comments} = this.state

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">

          <CommentAdd addComment={this.addComment}/>

          <CommentList comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}
