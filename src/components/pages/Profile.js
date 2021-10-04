import React, { Component } from 'react'
import Header from '../Header'
import QuestionsSolved from '../analytics/QuestionsSolved'
import BarGraph from '../analytics/BarGraph'
import RadarGraph from '../analytics/RadarGraph'
import Calendar from 'react-calendar'
import { Redirect } from 'react-router'
import Loader from '../Loader'
// import '../../css/ReactCalendar.css'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "https://dsa-tracker-450.herokuapp.com/api/pages/profile",
            api: {
                success: false
            },
            child_conditions: {
                question_chart_update: false,
                bar_chart_update:false,
                //     filter_update: false,
                //     questions_update: false,
            },
            // filters: {
            //     topic: new Set(),
            //     level: new Set(),
            //     status: new Set(),
            // },
            // activePage: 1
        }

    }

    componentDidMount() {
        var data = {
            day:null
        };
        const promise = (this.props.apiCall(data, "post", this.state.url))
        promise.then((response) => {
            // console.log(response)
            this.setState({
                api: {
                    success: true,
                    apiData: response,
                }
            })
        }).catch((error) => {
            this.setState({
                api: {
                    success: false,
                    apiError: error
                }
            })
        });
    }
    convert= (arg) => {
        var date = arg,
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    callDay = (clickedDay) => { 
        console.log(clickedDay)
        console.log(this.convert(clickedDay))
        var data = {
            day:this.convert(clickedDay)
        }
        const promise = (this.props.apiCall(data, "post", this.state.url))
        promise.then((response) => {
            // console.log(response)
            this.setState({
                api: {
                    success: true,
                    apiData: response,
                }
            })
        }).catch((error) => {
            this.setState({
                api: {
                    success: false,
                    apiError: error
                }
            })
        });
    };//moment(day.dateString).format(_format)


    render() {
        return (
            // this.props.isLoggedin?(
            <>
                <Header apiCall={this.props.apiCall} loggedIn={true} performance={true} />
                {
                    this.state.api.success ?  
                        <div className="container pt-32 pr-16 pl-16">


                            <div className="row">
                                <div className="col-9 pl-0 pr-16 h-100">
                                    <div className="row mb-32">
                                        {/* <div className="col pr-16">
                                            <div className="bg-secondary-black gray p-16 br-5 h-100">
                                                <div className="filter-heading f-16 fw-500 secondary-gray mb-16">
                                                    Ranking
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-7">
                                                        <span className="fw-400 white">Your Rank:</span>
                                                        <span className="f-24 orange">
                                                            {' '}3<sub>rd</sub>
                                                        </span>
                                                    </div>
                                                    <div className="col-5 legend pl-16" style={{ borderLeft: "1px solid #565656" }}>
                                                        <div className="user white">Ramesh</div>
                                                        <div className="user white">Suresh</div>
                                                        <div className="user orange">Ramesh</div>
                                                        <div className="user white">Ramesh</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div> */}

                                        <div className="col-4 pl-0">
                                            <QuestionsSolved chartData={this.state.api.apiData.data.questions_solved.difficulty_levels} count={this.state.api.apiData.data.questions_solved.count} question_chart_update={this.state.child_conditions.question_chart_update} flag={true} />
                                            
                                        </div>
                                        <div className="col-4 ">
                                            <QuestionsSolved chartData={this.state.api.apiData.data.question_marked.marks} count={this.state.api.apiData.data.question_marked.count} question_chart_update={this.state.child_conditions.question_chart_update} flag={false} />
                                            
                                        </div>
                                    </div>
                                    
                                        <BarGraph values={this.state.api.apiData.data.topic_wise_freq.values} bar_chart_update={this.state.child_conditions.bar_chart_update} labels={this.state.api.apiData.data.topic_wise_freq.labels}/> 
                                    
                                </div>
                                <div className="col-3 pl-16 pr-0">
                                    <div className="bg-secondary-black gray p-16 br-5 mb-32">
                                        <div className="filter-heading mb-8 f-16 fw-500 secondary-gray">
                                            Weekly Report
                                        </div>
                                        
                                        <RadarGraph chartData={this.state.api.apiData.data.week_data} />
                                        

                                    </div>
                                    <div className="bg-secondary-black gray p-16 br-5 mb-32">
                                        {/* <div className="filter-heading mb-8 f-16 fw-500 secondary-gray">
                                            Weekly Report
                                        </div> */}
                                        <Calendar onClickDay={this.callDay} showNeighboringMonth={false} />
                                        {/* <Calendar onClickDay={(value, event) => alert('Clicked day: ', value)} showNeighboringMonth={false} /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    :
                        <Loader/>
                }

            </>
            // )
            // :
            // <Redirect to={{pathname: '/dsa-450-tracker/signin'}} />
        )
    }
}
