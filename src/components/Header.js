import React from 'react'
import { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
class Header extends Component {
    logout = (e) => {
        var promise = this.props.apiCall({}, "post", 'https://dsa-tracker-450.herokuapp.com/api/logoutall/')
        promise.then((response) => {
            this.props.history.push("/dsa-450-tracker/signin");
        }).catch((error) => {
            this.props.history.push("/dsa-450-tracker/signin");
            // console.log(error)
        });
    }

    render(){

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
                            this.props.loggedIn ? (
                                <>
                                    <ul className="navbar-nav mx-auto fw-600 f-12">
                                        <li className="nav-item">
                                            <Link className={"nav-link" + (this.props.ques ? " active" : "")} aria-current="page" to="/dsa-450-tracker" isLoggedin={this.props.loggedIn}>Ques</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="#">Code</Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className={"nav-link" + (this.props.performance ? " active" : "")} aria-current="page" to="/dsa-450-tracker/profile" isLoggedin={this.props.loggedIn}>Performance</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="#">Friends</Link>
                                        </li> */}
                                    </ul>
                                    <ul className="navbar-nav fw-600 f-12">
                                        <li className="nav-item">
                                            <div className="nav-link pr-0" aria-current="page" to="/dsa-450-tracker/signin" isLoggedin={this.props.loggedIn} onClick={(e)=>this.logout(e)}>Logout</div>
                                            {/* <Link className="nav-link pr-0" aria-current="page" to="/dsa-450-tracker/signin" isLoggedin={this.props.loggedIn}>Logout</Link> */}
                                        </li>
                                    </ul>

                                </>
                            ) : (
                                this.props.signUp ? (
                                    <>
                                        <ul className="navbar-nav ms-auto">
                                            <li className="nav-item bg-orange pr-36 pl-36 br-5">
                                                <Link className="nav-link white" aria-current="page" to="/dsa-450-tracker/signup" isLoggedin={this.props.loggedIn}>Sign Up</Link>
                                            </li>
                                        </ul>
                                    </>
                                ) : <>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item bg-orange pr-36 pl-36 br-5">
                                            <Link className="nav-link white" aria-current="page" to="/dsa-450-tracker/signin" isLoggedin={this.props.loggedIn}>Sign In</Link>
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

}
export default withRouter(Header);