import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Main.css';
import Index from './components/pages/Index';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            api: {}
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
    test = () => {
        console.log("hi")
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
            this.props.history.push("/");
        }).catch(error => {
            console.log(error.response.data);
        });
    }
    apiCall = (data, method, url) => {
        const cookies = new Cookies();
        var token = cookies.get('token')
        var config = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            data: data

        };

        axios(config).then((response) =>{
            this.setState({
                api: {
                    success: 1,
                    apiData: response,
                    apiError: {}
                }
            })
        }).catch((error) =>{
            this.setState({
                api: {
                    success: 0,
                    apiData: {},
                    apiError: error
                }
            })
        });

        return this.state.api
    }
    render() {
        return (
            // wrapped in router in index.js 
            <Switch>
                <Route exact path="/signin">
                    <SignIn saveToken={
                        this.saveToken
                    }
                        test={
                            this.test
                        } />
                </Route>
                <Route exact path="/signup">
                    <SignUp saveToken={
                        this.saveToken
                    } />
                </Route>
                <Route exact path="/profile">
                    <Profile apiCall={
                        this.apiCall
                    } />
                </Route>
                <Route exact path="/">
                    <Index apiCall={
                        this.apiCall
                    } />
                </Route>
            </Switch>
        );
    }
}

export default withRouter(App);
