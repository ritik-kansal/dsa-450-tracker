import React from 'react'

export default function Header(props) {
    return (
        <div>
            <nav className="navbar r-nav navbar-expand-lg navbar-dark bg-secondary-black pt-16 pb-16">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {
                            props.loggedIn ? (
                                <>
                                    <ul className="navbar-nav mx-auto fw-600 f-12">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Ques</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Code</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Performance</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Friends</a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav fw-600 f-12">
                                        <li className="nav-item">
                                            <a className="nav-link pr-0" aria-current="page" href="#">Logout</a>
                                        </li>
                                    </ul>

                                </>
                            ) : (
                                props.signUp ? (
                                    <>
                                        <ul class="navbar-nav ms-auto">
                                            <li class="nav-item bg-orange pr-36 pl-36 br-5">
                                                <a class="nav-link white" aria-current="page" href="#">Sign Up</a>
                                            </li>
                                        </ul>
                                    </>
                                ) : <>
                                    <ul class="navbar-nav ms-auto">
                                        <li class="nav-item bg-orange pr-36 pl-36 br-5">
                                            <a class="nav-link white" aria-current="page" href="#">Sign In</a>
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
