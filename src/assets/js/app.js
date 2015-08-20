import React from 'react'
import _ from './utils'

_.init()

class Header extends React.Component {
  render() {

    let conditionList = null
    if(session) {
      conditionList = <ul></ul>
    } else {
      conditionList = <ul>
        <li>
          <a href="/" className={_.topPath() == '' ? 'active' : ''}>首页</a>
        </li>
        <li>
          <a href="/signin" className={_.topPath() == 'signin' ? 'active' : ''}>登录</a>
        </li>
        <li>
          <a href="/signup" className={_.topPath() == 'signup' ? 'active' : ''}>注册</a>
        </li>
      </ul>
    }
    return <header className="global-header">
      <div className="container">
        <h1 className="sitename">
          <a href="/">黑科技</a>
        </h1>
        <nav className="nav-right">

          {conditionList}
          
        </nav>
      </div>
    </header>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Header />
    </div>
  }
}

React.render(<App/>, document.body)