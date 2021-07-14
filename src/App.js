import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Main.css';
import Index from './components/pages/Index';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() { // this.getchartData(); // this should be this.getChartData();
        this.getChartData();
    }

    getChartData() { // Ajax calls here
        this.setState({
            chartData: {
                labels: [
                    'Boston',
                    'Worcester',
                    'Springfield',
                    'Lowell',
                    'Cambridge',
                    'New Bedford'
                ],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }
    test = ()=>{
        console.log("hi")
    }
    saveToken = (data,method,url)=>{
        // var data = JSON.stringify(data);
        const cookies = new Cookies();
        var token = cookies.get('token')
        var config = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                // 'Authorizarion': 'Token '+token
            },
            data: data,
        };

        axios(config)
            .then(response => {
                console.log(response.data)
                cookies.set('token', response.data.token, { 
                    path: '/',
                    secure:true,
                    sameSite:'strict'
                    
                 });
                })
                // .catch(error => {
                //     console.log(error.data);
                // });
    }
    authcall(data,method,url){
        var data = JSON.stringify(data);
        const cookies = new Cookies();
        var token = cookies.get('token')
        var config = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorizarion': 'Token '+token
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/signin">
                        <SignIn saveToken={this.saveToken} test={this.test} />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp saveToken={this.saveToken} />
                    </Route>
                    <Route exact path="/profile">
                        <Profile authCall={this.authcall} />
                    </Route>
                    <Route exact path="/">
                        <Index authCall={this.authcall} />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
