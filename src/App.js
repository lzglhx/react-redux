import React, { Component } from "react";
import CommentAdd from "./components/comment-add/comment-add";
import CommentList from "./components/comment-list/comment-list";
import { getComment } from "./store/actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.props.getComment();
  }

  onClick = () => {
    this.props.increase();
  };

  render() {
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
          <CommentAdd />

          <CommentList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch=", dispatch);
  return {
    getComment: () => dispatch(getComment()),
  };
};

const app = connect(null, mapDispatchToProps)(App);
export default app;
