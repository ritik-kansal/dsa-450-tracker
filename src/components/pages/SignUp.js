import React, { Component } from 'react'
import Header from '../Header'
import SignSignupContent from '../SignSignupContent'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "https://dsa-tracker-450.herokuapp.com/api/register",
            data: {
                username: "admin",
                email:"",
                name:"",
                password: "admin"
            }
        }
        
    }

    submit(e) {
        e.preventDefault();
        var data = JSON.stringify({
            "username": this.state.data.username,
            "email": this.state.data.email,
            "name": this.state.data.name,
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
                <Header signUp={false} />
                <div className="mx-auto text-center white pt-100 w-65">
                    <SignSignupContent primary={"Sign Up and Stay Connected"} secondary={"Sign Up and Stay Connected"} />
                    <form onSubmit={(e) => this.submit(e)}>
                    <div className="row align-items-center text-start mb-60">
                        <div className="col-4">
                                <div className="form-group">
                                    <input type="text" onChange={(e)=>this.handle(e)} id="username" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="username" placeholder="Username" />
                                    <input type="text" onChange={(e)=>this.handle(e)} id="name" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="name" placeholder="Name" />
                                </div>
                            
                        </div>
                        <div className="col-4 text-center f-48 gray">

                        </div>
                        <div className="col-4">
                            
                                <div className="form-group">
                                    <input type="email" onChange={(e)=>this.handle(e)} id="email" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="email" placeholder="Email" />
                                    <input type="password" onChange={(e)=>this.handle(e)} id="password" className="form-control gray bg-secondary-black mb-24 pl-16 pr-16 pt-16 pb-16" id="password" placeholder="Password" />
                                </div>
                        </div>
                        <div className="col-4 offset-4">
                            <input type="submit" className="text-start bg-orange white pl-16 pr-16 pt-16 pb-16 br-5 w-100" value="Create Account" />
                        </div>
                    </div>
                    </form>
                    <div className="text-center">
                        <img width="700" src="./images/bg-abstract.jpg" alt="" />
                    </div>
                </div>

            </>
        )
    }
}
export default SignUp;