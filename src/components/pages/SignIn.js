import React, { Component } from 'react'
import Header from '../Header'
import SignSignupContent from '../SignSignupContent'
import { Link,withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Cookies from 'universal-cookie';
// import axios from 'axios'


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "https://dsa-tracker-450.herokuapp.com/api/login",
            data: {
                username: "",
                password: ""
            }
        }
        
    }

    submit(e) {

        e.preventDefault();
        var data = JSON.stringify({
            "username": this.state.data.username,
            "password": this.state.data.password
        });
        this.props.saveToken(data,"post",this.state.url)
    }

    handle=(e)=> {
        const newData = (this.state.data)
        newData[e.target.id] = e.target.value
        console.log(newData)

        this.setState({
            data: newData
        });
    }


    render() {
        return (
            <>
                <Header apiCall={this.props.apiCall} signUp={true} />
                <div className="mx-auto text-center white pt-100 w-65">
                    <SignSignupContent primary={"Login To Your Account"} secondary={"Hang tight. We're almost there..."} />
                    <div className="row align-items-center text-start mb-60">
                        <div className="col-4 offset-4" >
                            <form onSubmit={(e) => this.submit(e)}>
                                <div className="form-group">
                                    <input onChange={(e) => this.handle(e)} id="username" value={this.state.data.username} type="text" className="form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16" placeholder="username" />
                                    <input onChange={(e) => this.handle(e)} id="password" value={this.state.data.password} type="password" className="form-control bg-secondary-black white mb-24 pl-16 pr-16 pt-16 pb-16" placeholder="Password" />
                                    <input id="submit" type="submit" className="text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100" value="Login in to your account ->" />
                                </div>
                            </form>
                        </div>
                        {/* <div className="col text-center f-48 gray">
                            /
                        </div> */}
                        {/* <div className="col">
                            <Link to="">
                                <div className="gray-border w-100 pl-16 pr-16 pt-16 pb-16 fw-800 secondary-gray br-5 mb-20"><img src="./images/google.png" width="24" className="align-middle mr-12" alt="" /> Google</div>
                            </Link>
                            <Link to="">
                                <div className="gray-border w-100 pl-16 pr-16 pt-16 pb-16 fw-800 secondary-gray br-5 mb-20"><img src="./images/facebook.png" width="24" className="align-middle mr-12" alt="" /> Github</div>
                            </Link>
                        </div> */}
                    </div>

                    <div className="text-center">
                        <img width="700" src="./images/bg-abstract.jpg" alt="" />
                    </div>
                </div>

            </>
        )
    }
}
export default withRouter(SignIn);