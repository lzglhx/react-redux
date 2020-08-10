/**
 * action：Action 是把数据从应用传到 store 的有效载荷。
 * store.dispatch() 将 action 传到 store。
 */
import { ADD_COMMENT, RECEIVER_COMMENT, DELETE_COMMENT } from "./action-types";

export const receiverComment = (comments) => ({
  type: RECEIVER_COMMENT,
  data: comments,
});

export const getComment = () => {
  return (dicpatch) => {
    setTimeout(() => {
      const comments = [
        { username: "Tom", content: "react太简单了!" },
        { username: "Jack", content: "react太难了!" },
      ];
      dicpatch(receiverComment(comments));
    }, 1000);
  };
};

//添加评论
export const addComment = (comment) => ({ type: ADD_COMMENT, data: comment });

//删除评论
export const deleteComment = (index) => ({
  type: DELETE_COMMENT,
  data: index,
});
