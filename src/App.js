import React, { Component } from 'react';
// import logo from './logo.svg'; 
import './App.css';
import './css/Main.css';
import Index from './components/pages/Index';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import { Switch, Route, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chartData: {},
            api: {},
            isLoggedin:false
        }
    }

    
    saveToken = (data, method, url) => { // var data = JSON.stringify(data);
        const cookies = new Cookies();
        // var token = cookies.get('token')
        var config = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data

        };

        axios(config).then(response => {
            cookies.set('token', response.data.token, {
                path: '/',
                secure: true,
                sameSite: 'strict'

            });
            // this.props.history.push("/dsa-450-tracker");
            this.setState({
                isLoggedin: true,
            },()=>{
                this.props.history.push("/dsa-450-tracker");
            }
            );
        }).catch(error => {
            var error_str = "";
            for(var key in error.response.data){
                error_str+=""+key+" -> "+error.response.data[key]+"\n"
            }
            alert(error_str)
            // console.log(error.response.data);
        });
    }

    apiCall = (data, method, url) => {
        const cookies = new Cookies();
        var token = cookies.get('token')
        // console.log("in ",data)
        var config = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            data: data

        };

        return axios(config)

        // return this.state.api
    }
    render() {
        return (
            // wrapped in router in index.js 
            <Switch>
                <Route exact path="/dsa-450-tracker/signin">
                    <SignIn saveToken={
                        this.saveToken
                    }
                     />
                </Route>
                <Route exact path="/dsa-450-tracker/signup">
                    <SignUp saveToken={
                        this.saveToken
                    } />
                </Route>
                <Route exact path="/dsa-450-tracker/profile">
                    {
                        this.state.isLoggedin ?
                            <Profile apiCall={this.apiCall} />
                        :
                        <SignIn saveToken={
                            this.saveToken
                        }
                         />
                    }
                </Route>
                <Route exact path="/dsa-450-tracker">
                {
                    this.state.isLoggedin ? 
                        <Index apiCall={this.apiCall} />
                    :<SignIn saveToken={
                        this.saveToken
                    }
                     />
                }
                        </Route>
            </Switch>
        );
    }
}

export default withRouter(App);
