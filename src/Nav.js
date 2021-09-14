import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getquestions, logout } from './Redux/Action'

const Nav = ({ logout, loggedInUser, users, onhome }) => {
    return (
        <>
            <div className="navbar">
                {
                    onhome ?
                        <>
                            <div className="navbar-div" style={{ marginRight: "150px" }}>
                                <Link to="/home"><div>Home</div></Link>
                                <Link to="/add"><div>New Question</div></Link>
                                <Link to ="/leaderboard"><div>Leader Board</div></Link>
                            </div>
                            <div className="navbar-div">
                                {/* <img style={{height:"50px"}} src ={users[loggedInUser].avatarURL}/> */}
                                <div>Hello {users[loggedInUser].name}</div>
                                <Link to="/">
                                <div style={{ cursor: "pointer" }} onClick={logout}>Logout</div>
                                </Link>
                                
                            </div>
                        </> :
                        <>
                            <div className="navbar-div" style={{ marginRight: "150px" }}>
                                <div onClick={()=> alert('please log in to view the home page')}>Home</div>
                                <div onClick={()=> alert('please log in to add a new question')}>New Question</div>
                                <div onClick={()=> alert('please log in to view the leader board page')}>Leader Board</div>
                            </div>
                            
                        </>
                }

            </div>
            <hr />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.loggedInUser,
        users: state.users,
        onhome: state.onhome

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(logout()) },
        getquestions: ()=>{dispatch(getquestions())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
