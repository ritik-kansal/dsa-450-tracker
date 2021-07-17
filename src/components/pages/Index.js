import React, { Component } from 'react'
import Header from "../Header";
import FilterBox from '../FilterBox';
import Question from '../Question';
import QuestionsSolved from '../analytics/QuestionsSolved';
import Chart from '../Chart';


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "http://127.0.0.1:8000/api/pages/index",
            api: {
                success: false
            },
            child_conditions: {
                question_chart_update: false,
                filter_update: false,
                questions_update: false,
            },
            filters: new Set()
        }

    }

    componentDidMount() {
        var data = JSON.stringify({

        });
        const promise = (this.props.apiCall(data, "get", this.state.url))
        promise.then((response) => {
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

    filter = (e, isSelected) => {
        var newFilters = new Set(this.state.filters);
        if (isSelected) {
            newFilters.add(e.currentTarget.getAttribute('topic_id'))
        }
        else {
            newFilters.delete(e.currentTarget.getAttribute('topic_id'))
        }
        this.setState({
            filters: newFilters,  
        }, () => {
            var data = {
                topic_id: [...this.state.filters],
            }
            if (this.state.filters.size != 0) {
                var promise = (this.props.apiCall(data, "post", 'http://127.0.0.1:8000/api/filter/general'))
            }
            else {
                var promise = (this.props.apiCall(data, "get", 'http://127.0.0.1:8000/api/get_question/1'))
            }
            promise.then((response) => {
                var newApi = this.state.api
                newApi.apiData.data.questions_data = response.data
                this.setState({
                    api: newApi,
                    child_conditions: {
                        question_chart_update: false,
                        filter_update: false,
                        questions_update: true,
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
        )

    }
    status_update = (e) => {
        var data = {
            question_id: e.currentTarget.getAttribute('name'),
            mark: e.currentTarget.getAttribute('status')
        }
        var promise = (this.props.apiCall(data, "post", 'http://127.0.0.1:8000/api/test_question_user_mark_public'))
        promise.then((response)=>{
            var promise = (this.props.apiCall({}, "get", 'http://127.0.0.1:8000/api/questions_solved'))
    
            promise.then((response) => {
                var newApi = this.state.api
                newApi.apiData.data.questions_solved = response.data.questions_solved
                console.log(newApi)
                this.setState({
                    api:newApi,
                    child_conditions: {
                        question_chart_update: true,
                        filter_update: false,
                        questions_update: false, // no need to relect this change on frontend as it's already there
                    }
                })
                console.log(this.state.api,response.data.questions_solved)
            }).catch((error) => {
                this.setState({
                    api: {
                        success: false,
                        apiError: error
                    }
                })
            });
        })

    }
    // )

    // }

    render() {
        return (
            <>
                <Header loggedIn={true} />
                <div className="container pt-32 pr-16 pl-16" style={{minHeight:"100vh"}}>
                    <div className="row pb-32">
                        <div className="col-6 bg-secondary-black gray br-5">
                            <div className="row r-tabs text-center pt-12 pb-12">
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3 bg-secondary-black gray br-5"></div>
                    </div>
                    <div className="row">
                        <div className="col-3 pl-0 pr-16">
                            {
                                this.state.api.success ?
                                    (
                                        <>
                                            <FilterBox topics={this.state.api.apiData.data.topics} filterData={this.filter} filter_update={this.state.child_conditions.filter_update}/>
                                            <QuestionsSolved chartData={this.state.api.apiData.data.questions_solved.difficulty_levels} question_chart_update={this.state.child_conditions.question_chart_update} />
                                        </>
                                    )
                                    : ""}


                        </div>
                        <div className="col-9 pl-16 pr-0">
                            {
                                this.state.api.success ?
                                    this.state.api.apiData.data.questions_data.questions.map((question, i) => {
                                        return <Question key={i} question_data={question} status_update={this.status_update} questions_update={this.state.child_conditions.questions_update}/>
                                    })
                                    : ""
                            }

                        </div>
                    </div>
                </div>
                {/* <Chart chartData={
                        this.state.chartData
                    }
                    location="Massachusetts"
                    legendPosition="bottom"/> */} </>
        )
    }
}
