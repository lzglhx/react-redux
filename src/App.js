import React, { Component } from "react";
import CommentAdd from "./components/comment-add/comment-add";
import CommentList from "./components/comment-list/comment-list";
import { getComment } from "./store/actions";
import { connect } from "react-redux";
import md5 from "md5";
import CryptoJS from "crypto-js/crypto-js";

class App extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.props.getComment();
    const password = "123456";
    // const aaaa = CryptoJS.enc.Utf8.parse(str);
    // const aaaa = CryptoJS.AES.encrypt("123456");
    // const aaaa = CryptoJS.enc.Base64.stringify("123456");
    var base64Encode = this.getBase64(password);
    console.log(base64Encode, "================");
  }

  getBase64 = (str) => {
    const encrypted = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(str)
    );
    return encrypted;
  };

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
