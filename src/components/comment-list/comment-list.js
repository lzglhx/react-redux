import React, {Component} from 'react'
import './comment-list.css'
import PropTypes from 'prop-types';
import CommentItem from "../comment-item/comment-item";

export default class CommentList extends Component {

  //指定对象属性得类型
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }


  render () {
    //读取数据：props：组件外到组件内得数据
    let {comments, deleteComment} = this.props
    const display = comments.length === 0? 'block': 'none'

    return (
      <div>
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {
              comments.map((comment, index) => <CommentItem comment={comment} key={index} index={index} deleteComment={deleteComment}/>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
