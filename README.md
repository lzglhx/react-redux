react 调试工具：[https://blog.csdn.net/one_girl/article/details/80916232]
阮一峰 react-redux：[http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html]

# react-redux 工作原理

1. view 通过 Store.dispatch()发出 Action，Action 描述当前发生的事情，接受对象作为参数并将它发送给 Store;
2. Store 收到 Action 后，会自动调用 Reducer，Reducer 接受两个参数： State 和 Action,更新后返回新的 State;
3. Store 会调用监听函数 Store.subscribe(listener),一旦 State 发生变化，就会重新渲染 view;

# Store

Store 就是把它们联系到一起的对象。Store 有以下职责：

1. 维持应用的 state；
2. 提供 getState() 方法获取 state；
3. 提供 dispatch(action) 方法更新 state；
4. 通过 subscribe(listener) 注册监听器;
5. 通过 subscribe(listener) 返回的函数注销监听器。

# mapStateToprops 和 mapDispatchToProps

1. connect() 用于包装 UI 组件生成容器组件

   ```javascript
     import { connect } from 'react-redux' connect( mapStateToprops, mapDispatchToProps)(Counter)
   ```

2. mapStateToprops() 将外部的数据（即 state 对象）转换为 UI 组件的标签属性

   ```javascript
   const mapStateToprops = function(state) {
     return { value: state };
   };
   ```

3. mapDispatchToProps()
   将分发 action 的函数转换为 UI 组件的标签属性 简洁语法可以直接指定为 actions 对象或包含多个 action 方法的对象
