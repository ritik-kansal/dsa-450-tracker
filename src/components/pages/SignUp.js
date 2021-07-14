import React, { Component } from 'react'
import Header from '../Header'
import SignSignupContent from '../SignSignupContent'

export default class SignUp extends Component {
    render() {
        return (
            <>
                <Header signUp={true} />
                <div className="mx-auto text-center white pt-100 w-65">
                    <SignSignupContent primary={"Sign Up and Stay Connected"} secondary={"Sign Up and Stay Connected"} />
                    <div className="row align-items-center text-start mb-60">
                        <div className="col-4">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="username" placeholder="Username" />
                                    <input type="text" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="name" placeholder="Name" />
                                </div>
                            </form>
                        </div>
                        <div className="col-4 text-center f-48 gray">

                        </div>
                        <div className="col-4">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="email" placeholder="Email" />
                                    <input type="password" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="password" placeholder="Password" />
                                </div>
                            </form>
                        </div>
                        <div className="col-4 offset-4">
                            <input type="submit" className="text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100" value="Create Account" />
                        </div>
                    </div>
                    <div className="text-center">
                        <img width="700" src="./images/bg-abstract.jpg" alt="" />
                    </div>
                </div>

            </>
        )
    }
}
