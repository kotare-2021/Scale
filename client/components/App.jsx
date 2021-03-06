import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'

import { checkAuth } from '../actions/auth'
import Statistic from './Statistic'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <Router>

      <Nav/>
{/* <div className="container has-text-centered">

        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">Lost and Found</h1>
            </Link>
            <Route path="/" component={Nav} />
          </div>
        </div>

        <div className='      '>
          {!auth.isAuthenticated &&
            <Route exact path="/" component={Login} />
          }
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>

      </div> */}
      <Route path="/stats" component={Statistic} />
    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
