import { connect } from 'react-redux';
import './App.css';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import { Route } from 'react-router-dom'
import Id from './questions/[id]';
import CreateQuestion from './createQuestion';
import { useEffect } from 'react';
import { getquestions, getUsers } from './Redux/Action';
import LeaderBoard from './LeaderBoard';
import LoadingBar from 'react-redux-loading-bar'


const App = ({ getUsers, getquestions }) => {
  useEffect(() => {
    getUsers()
    getquestions()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <Nav />
      <header>
        <LoadingBar />
      </header>
      <Route exact path='/' render={() => (
        <Login />
      )}
      />
      <Route path='/home' render={() => (
        <Home />
      )}
      />
      <Route path='/questions/:id' render={() => (
        <Id />
      )}
      />
      <Route exact path='/add' render={() => (
        <CreateQuestion />
      )}
      />
      <Route exact path='/leaderboard' render={() => (
        <LeaderBoard />
      )}
      />
    </div>

  );
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => { dispatch(getUsers()) },
    getquestions: () => { dispatch(getquestions()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
