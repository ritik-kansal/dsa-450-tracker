import React, { Component } from 'react'
import Header from '../Header'
import QuestionsSolved from '../analytics/QuestionsSolved'
import BarGraph from '../analytics/BarGraph'
import RadarGraph from '../analytics/RadarGraph'
import Calendar from 'react-calendar'
// import '../../css/ReactCalendar.css'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "http://127.0.0.1:8000/api/pages/profile",
            api: {
                success: false
            },
            child_conditions: {
                question_chart_update: false,
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
        var data = JSON.stringify({

        });
        const promise = (this.props.apiCall(data, "get", this.state.url))
        promise.then((response) => {
            console.log(response)
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

    render() {
        return (
            <>
                <Header loggedIn={true} />
                <div className="container pt-32 pr-16 pl-16">


                    <div className="row">
                        <div className="col-9 pl-0 pr-16 h-100">
                            <div className="row mb-32">
                                <div className="col pr-16">
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

                                </div>
                                <div className="col pl-16 pr-16">

                                    {
                                        this.state.api.success ? <QuestionsSolved chartData={this.state.api.apiData.data.questions_solved.difficulty_levels} question_chart_update={this.state.child_conditions.question_chart_update} /> : ""
                                    }
                                </div>
                                <div className="col pl-16">
                                    {
                                        this.state.api.success ? <QuestionsSolved chartData={this.state.api.apiData.data.questions_solved.difficulty_levels} question_chart_update={this.state.child_conditions.question_chart_update} /> : ""
                                    }
                                </div>
                            </div>
                            <BarGraph />
                        </div>
                        <div className="col-3 pl-16 pr-0">
                            <div className="bg-secondary-black gray p-16 br-5 mb-32">
                                <div className="filter-heading mb-8 f-16 fw-500 secondary-gray">
                                    Weekly Report
                                </div>
                                {
                                    this.state.api.success ? <RadarGraph chartData={this.state.api.apiData.data.week_data} /> : ""
                                }

                            </div>
                            <div className="bg-secondary-black gray p-16 br-5 mb-32">
                                {/* <div className="filter-heading mb-8 f-16 fw-500 secondary-gray">
                                    Weekly Report
                                </div> */}
                                <Calendar onClickDay={(value, event) => alert('Clicked day: ', value)} showNeighboringMonth={false} />
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}
