import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(props) {
    return (
        <div>
            <nav className="navbar r-nav navbar-expand-lg navbar-dark bg-secondary-black pt-16 pb-16">
                <div className="container">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {
                            props.loggedIn ? (
                                <>
                                    <ul className="navbar-nav mx-auto fw-600 f-12">
                                        <li className="nav-item">
                                            <Link className={"nav-link" + (props.ques ? " active" : "")} aria-current="page" to="/dsa-450-tracker" isLoggedin={props.loggedIn}>Ques</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="#">Code</Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className={"nav-link" + (props.performance ? " active" : "")} aria-current="page" to="/dsa-450-tracker/profile" isLoggedin={props.loggedIn}>Performance</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="#">Friends</Link>
                                        </li> */}
                                    </ul>
                                    <ul className="navbar-nav fw-600 f-12">
                                        <li className="nav-item">
                                            <Link className="nav-link pr-0" aria-current="page" to="/dsa-450-tracker/signin" isLoggedin={props.loggedIn}>Logout</Link>
                                        </li>
                                    </ul>

                                </>
                            ) : (
                                props.signUp ? (
                                    <>
                                        <ul className="navbar-nav ms-auto">
                                            <li className="nav-item bg-orange pr-36 pl-36 br-5">
                                                <Link className="nav-link white" aria-current="page" to="/dsa-450-tracker/signup" isLoggedin={props.loggedIn}>Sign Up</Link>
                                            </li>
                                        </ul>
                                    </>
                                ) : <>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item bg-orange pr-36 pl-36 br-5">
                                            <Link className="nav-link white" aria-current="page" to="/dsa-450-tracker/signin" isLoggedin={props.loggedIn}>Sign In</Link>
                                        </li>
                                    </ul>
                                </>
                            )
                        } </div>
                </div>
            </nav>
        </div>
    )
}