react调试工具：[https://blog.csdn.net/one_girl/article/details/80916232]

# react脚手架
  - xxx 脚手架: 用来帮助程序员快速创建一个基于 xxx 库的模板项目
     a. 包含了所有需要的配置
     b. 指定好了所有的依赖
     c. 可以直接安装/编译/运行一个简单效果
  - react 提供了一个用于创建 react 项目的脚手架库: create-react-app
  - 项目的整体技术架构为: [react + webpack + es6 + eslint]
  - 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

# 创建项目并启动
   npm install -g create-react-app
   create-react-app hello-react
   cd hello-react
   npm start

# 项目结构
  ReactNews
    |--node_modules---第三方依赖模块文件夹
    |--public
    |-- index.html-----------------主页面
    |--scripts
    |-- build.js-------------------build 打包引用配置
    |-- start.js-------------------start 运行引用配置
    |--src------------源码文件夹
    |--components-----------------react 组件
    |--index.js-------------------应用入口 js
    |--.gitignore------git 版本管制忽略的配置
    |--package.json----应用包配置文件
    |--README.md-------应用描述说明的 readme 文件

# 组件三大属性
  - state
    - 初始化状态:构造函数里面初始化状态
       constructor (props) {
          super(props)
          this.state = {
              stateProp1 : value1,
              stateProp2 : value2
          }
       }
    - 读取状态值：render里面读取状态
        this.state.statePropertyName
    - 更新状态---->组件界面更新：处理事件中先读取状态，再更新状态
      this.setState({
        stateProp1 : value1,
        stateProp2 : value2
      })
      
  - props
    - 作用：
      - 通过标签属性从组件外向组件内传递变化的数据
        [注意]: 组件内部不要修改 props 数据   
    - 内部读取某个属性值
        this.props.propertyName
    - 对 props 中的属性值进行类型限制和必要性限制
        Person.propTypes = {
           name: React.PropTypes.string.isRequired,
           age: React.PropTypes.number.isRequired
        }
    - 扩展属性: 将对象的所有属性通过 props 传递
       <Person {...person}/>
    - 默认属性值
       Person.defaultProps = {
         name: 'Mary'
       }
    - 组件类的构造函数
        constructor (props) {
          super(props)
          console.log(props) // 查看所有属性
        }
    - [问题]: 请区别一下组件的 props 和 state 属性
               state: 组件自身内部可变化的数据
               props: 从组件外部向组件内部传递数据, 组件内部只读不修改
               
  - refs
    - 组件内的标签都可以定义 ref 属性来标识自己
      a. <input type="text" ref={input => this.msgInput = input}/>
      b. 回调函数在组件初始化渲染完或卸载时自动调用
    - 在组件中可以通过 this.msgInput 来得到对应的真实 DOM 元素
    - 作用: 通过 ref 获取组件内容特定标签对象, 进行读取其相关数据
    
  - 事件处理
    - 通过 onXxx 属性指定组件的事件处理函数(注意大小写)
      a. React 使用的是自定义(合成)事件, 而不是使用的原生 DOM 事件
      b. React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
    - 通过 event.target 得到发生事件的 DOM 元素对象
      <input onFocus={this.handleClick}/>
      handleFocus(event) {
         event.target //返回 input 对象
      }

# 生命周期
  1) 组件的三个生命周期状态:
     * Mount： 插入真实 DOM
     * Update： 被重新渲染
     * Unmount： 被移出真实 DOM
  2) React 为每个状态都提供了勾子(hook)函数
     * componentWillMount()
     * componentDidMount()
     * componentWillUpdate()
     * componentDidUpdate()
     * componentWillUnmount()
  3) 生命周期流程:
     a. 第一次初始化渲染显示: ReactDOM.render()
        * constructor(): 创建对象初始化 state
        * componentWillMount() : 将要插入回调
        * render() : 用于插入虚拟 DOM 回调
        * componentDidMount() : 已经插入回调
     b. 每次更新 state: this.setSate()
        * componentWillUpdate() : 将要更新回调
        * render() : 更新(重新渲染)
        * componentDidUpdate() : 已经更新回调
     c. 移除组件: ReactDOM.unmountComponentAtNode(containerDom)
        * componentWillUnmount() : 组件将要被移除回调
  4）[重要钩子]
     * render(): 初始化渲染或更新渲染调用
     * componentDidMount(): 开启监听, 发送 ajax 请
     * componentWillUnmount(): 做一些收尾工作, 如
     * componentWillReceiveProps(): 后面需要时讲

# axios 
  - 文档; [https://github.com/axios/axi]
  - get请求
      axios.get(url).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error.message)
      })
    }
  - post请求
      axios.post(url, {firstName: 'Fred'}).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error.message)
      })
     }

# Fetch请求
  - 文档：[https://github.github.io/fetch/]
  - 博客：[https://segmentfault.com/a/1190000003810652]
