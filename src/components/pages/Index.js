import React, { Component } from 'react'
import Header from "../Header";
import FilterBox from '../FilterBox';
import Question from '../Question';
import QuestionsSolved from '../analytics/QuestionsSolved';
import Pagination from "react-js-pagination";

// import Chart from '../Chart';


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
            filters: {
                topic: new Set(),
                level: new Set(),
                status: new Set(),
                search: {
                    name: "array",
                }
            },
            activePage: 1
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

    search = (e) => {
        var question_name = this.state.filters.search

        var data = {}
        data.search = question_name
        console.log(e.target.parentNode.firstChild.value)
        data.search.name =  e.target.parentNode.firstChild.value
        // console.log(e.currentTarget.value)

        var promise = (this.props.apiCall(data, "post", 'http://127.0.0.1:8000/api/filter/general/' + this.state.activePage))
        console.log(promise)
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

    filter_data = () => {
        var topics = this.state.filters.topic
        var levels = this.state.filters.level
        var status = this.state.filters.status

        var data = {}
        if (topics.size !== 0) data.topic_id = [...topics]
        if (levels.size !== 0) data.level = [...levels]
        if (status.size !== 0) data.mark = [...status]
        var promise = (this.props.apiCall(data, "post", 'http://127.0.0.1:8000/api/filter/general/' + this.state.activePage))
        console.log(promise)
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

    filter = (e, isSelected) => {
        var newFilters = this.state.filters;
        var topic_id = e.currentTarget.getAttribute('topic_id')
        var level_id = e.currentTarget.getAttribute('level_id')
        var status_id = e.currentTarget.getAttribute('status_id')
        if (isSelected) {
            if (topic_id)
                newFilters.topic.add(topic_id)
            if (level_id)
                newFilters.level.add(level_id)
            if (status_id)
                newFilters.status.add(status_id)
        }
        else {
            if (topic_id)
                newFilters.topic.delete(topic_id)
            if (level_id)
                newFilters.level.delete(level_id)
            if (status_id)
                newFilters.status.delete(status_id)
        }

        this.setState({
            filters: newFilters,
            activePage: 1
        }, () => {
            this.filter_data()
        }
        )

    }

    status_update = (e) => {
        var data = {
            question_id: e.currentTarget.getAttribute('name'),
            mark: e.currentTarget.getAttribute('status')
        }
        var promise = (this.props.apiCall(data, "post", 'http://127.0.0.1:8000/api/test_question_user_mark_public'))
        promise.then((response) => {
            var promise_1 = (this.props.apiCall({}, "get", 'http://127.0.0.1:8000/api/questions_solved'))

            promise_1.then((response) => {
                var newApi = this.state.api
                newApi.apiData.data.questions_solved = response.data.questions_solved
                // console.log(newApi)
                this.setState({
                    api: newApi,
                    child_conditions: {
                        question_chart_update: true,
                        filter_update: false,
                        questions_update: false, // no need to relect this change on frontend as it's already there
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
        })

    }

    handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber },
            () => {
                this.filter_data()
            }
        );
    }


    render() {
        return (
            <>
                <Header loggedIn={true} />
                <div className="container pt-32 pr-16 pl-16" style={{ minHeight: "100vh" }}>
                    <div className="row pb-32">
                        <div className="col-6 gray br-5 pl-0">
                            <div className="row r-tabs text-center">
                                {/* <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div>
                                <div className="col">All Ques</div> */}
                                {
                                    this.state.api.success ?
                                        (
                                            <Pagination
                                                activePage={this.state.activePage}
                                                itemsCountPerPage={10}
                                                totalItemsCount={this.state.api.apiData.data.questions_data.total_length}
                                                pageRangeDisplayed={5}
                                                itemClass="page-item"
                                                linkClass="page-link"
                                                onChange={this.handlePageChange.bind(this)}
                                            />
                                        )
                                        : ""
                                }
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3" style={{"padding":0}}>
                            <input className="bg-secondary-black gray search-bar pl-8" placeholder="search question"></input>
                            {/* <input className="text-start bg-orange white" type="submit" value="search" onClick={(e)=>this.search(e)}/> */}
                            <button className="text-start bg-orange white search-bar" type="submit" onClick={(e)=>this.search(e)}>
                                search
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pl-0 pr-16">
                            {
                                this.state.api.success ?
                                    (
                                        <>
                                            <div className="mb-32">
                                                <QuestionsSolved chartData={this.state.api.apiData.data.questions_solved.difficulty_levels} count={this.state.api.apiData.data.questions_solved.count}  question_chart_update={this.state.child_conditions.question_chart_update} flag={true} />
                                            </div>
                                            <FilterBox topics={this.state.api.apiData.data.topics} filterData={this.filter} filter_update={this.state.child_conditions.filter_update} />
                                        </>
                                    )
                                    : ""}


                        </div>
                        <div className="col-9 pl-16 pr-0">
                            {
                                this.state.api.success ?
                                    this.state.api.apiData.data.questions_data.questions.map((question) => {
                                        // console.log(question)
                                        return <Question key={question.id} question_data={question} status_update={this.status_update} questions_update={this.state.child_conditions.questions_update} />
                                    })
                                    : ""
                            }

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
