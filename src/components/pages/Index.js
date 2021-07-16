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
        // console.log()
        // newFilters.push();
        this.setState({
            filters: newFilters,
            child_conditions: {
                question_chart_update: false,
                filter_update: false,
                questions_update: true,
            }
        }, () => {
            var filters = this.state.filters
            var data = {
                topic_id:[...filters]
            }
            var promise;
            console.log(filters.size)
            if(filters.size != 0)
            {
                promise = (this.props.apiCall(data, "post", 'http://127.0.0.1:8000/api/filter/general'))
            }
            else{
                promise = (this.props.apiCall(data, "get", 'http://127.0.0.1:8000/api/get_question/1'))
            }
            promise.then((response) => {
                var newApi = this.state.api
                newApi.apiData.data.questions_data = response.data
                console.log(newApi)
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

render() {
    return (
        <>
            <Header loggedIn={true} />
            <div className="container pt-32 pr-16 pl-16">
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
                                    <FilterBox topics={this.state.api.apiData.data.topics} filterData={this.filter} />
                                )
                                : ""}
                        {
                            this.state.api.success ?
                                (
                                    // <QuestionsSolved chartData={[0, 1, 2, 0]} question_chart_update={this.state.child_conditions.question_chart_update} />
                                    <QuestionsSolved chartData = {this.state.api.apiData.data.questions_solved.difficulty_levels} question_chart_update={this.state.child_conditions.question_chart_update} />
                                )
                                : ""}

                    </div>
                    <div className="col-9 pl-16 pr-0">
                        {
                            this.state.api.success ?
                                // console.log(this.state.api.apiData)
                                this.state.api.apiData.data.questions_data.questions.map((question, i) => {
                                    let level = question.level == 2 ? "Hard" : question.level == 1 ? "Medium" : "Easy"
                                    return <Question key={i} question={question.link} level={level} filter={question.topic_name} />
                                })
                                : ""}
                        {/* <Question question={question}/>
                            <Question question={question}/> */}
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
