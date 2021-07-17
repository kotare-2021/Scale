import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDiary, createCatch } from '../actions/diary'

import Home from './home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Footer from './Footer'


import { checkAuth } from '../actions/auth'
import Statistic from './Statistic'
import Diary from './Diary'
import FishInfo from './FishInfo'
import RulesInfo from './RulesInfo'
import UserHome from './UserHome'
import Achievements from './Achievements'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() =>{
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
    dispatch(getDiary())
}, [])

  return (
    <Router>
      <div className="container has-text-centered">

      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">Scale</h1>
          </Link>
          <Route path="/" component={Nav} />
          

        </div>
      </div>

        <div className='      '>
          {!auth.isAuthenticated &&

          <>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            </>
          }
            <Route exact path="/" component={Home} />
            <Route path="/stats" component={Statistic} />
            <Route path="/fish" component={FishInfo} />
            <Route path="/rules" component={RulesInfo} />
            <Route path='/' component={Footer}/> 

        </div>
        {auth.isAuthenticated &&
         <>
          <Route path="/diary" component={Diary} />
          <Route path="/stats" component={Statistic} />
          <Route path="/achievements" component={Achievements} />
       
          </>
        } 
        </div>
    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {

    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
