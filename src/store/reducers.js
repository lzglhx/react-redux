/**
 * reducers：用来接收action、state，并返回更改后的state；
 * Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
 */
import { combineReducers } from "redux";
import { ADD_COMMENT, RECEIVER_COMMENT, DELETE_COMMENT } from "./action-types";

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.data];
    case RECEIVER_COMMENT:
      return action.data;
    case DELETE_COMMENT:
      return state.filter((c, index) => index !== action.data);
    default:
      return state;
  }
};

export default combineReducers({ comments });
