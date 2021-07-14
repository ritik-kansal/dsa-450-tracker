import React, { Component } from 'react'
import Header from '../Header'
import QuestionsSolved from '../analytics/QuestionsSolved'
import BarGraph from '../analytics/BarGraph'
import RadarGraph from '../analytics/RadarGraph'

export default class Profile extends Component {
    render() {
        return (
            <>
                <Header loggedIn={true} />
                <div className="container pt-32 pr-16 pl-16">


                    <div className="row">
                        <div className="col-9 pl-0 pr-16">
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
                                                    3<sub>rd</sub>
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
                                    <QuestionsSolved />
                                </div>
                                <div className="col pl-16">
                                    <QuestionsSolved />
                                </div>
                            </div>
                            <BarGraph />
                        </div>
                        <div className="col-3 pl-16 pr-0">
                            <div className="bg-secondary-black gray p-16 br-5 mb-32">
                                <div className="filter-heading mb-8 f-16 fw-500 secondary-gray">
                                    Weekly Report
                                </div>
                                <RadarGraph />
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}
