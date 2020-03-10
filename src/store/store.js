/**
 * Store 就是保存数据的地方，可以把它看成一个容器。整个应用只能有一个 Store。
 * Store 就是把action和reducers联系到一起的对象。Store 有以下职责：
 * 1、维持应用的 state；
 * 2、提供 getState() 方法获取 state；
 * 3、提供 dispatch(action) 方法更新 state；
 * 4、通过 subscribe(listener) 注册监听器;
 * 5、通过 subscribe(listener) 返回的函数注销监听器
 */
import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

// 根据counter函数创建store对象
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)) // 应用上异步中间件
);
