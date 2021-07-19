import Filter from './Filter'

import React, { Component } from 'react'

export default class FilterBox extends Component {
    constructor(props) {
        super(props)
        this.state={
            difficulty_levels:[
                {
                    id:0,
                    name:"Easy"
                },
                {
                    id:1,
                    name:"Medium"
                },
                {
                    id:2,
                    name:"Hard"
                }
            ]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.filter_update
    }

    render() {
        return (
            <div className="bg-secondary-black gray p-16 br-5 mb-32">
                {console.log("filter box")}
                <div className="filter-heading mb-8 f-16 fw-500 secondary-gray">
                    Topics
                </div>
                <div className="filters f-12">
                    {
                        this.props.topics.map((topic, i) => {
                            return <Filter key={topic.id} topic_id={topic.id} filter={topic.name} filterData={this.props.filterData}/>
                        })
                    } </div>
                <div className="filter-heading mt-4 mb-8 f-16 fw-500 secondary-gray">
                    Difficulty
                </div>
                <div className="filters f-12">
                    {
                        this.state.difficulty_levels.map((level, i) => {
                            return <Filter key={level.id} level_id={level.id} filter={level.name} filterData={this.props.filterData}/>
                        })
                    } </div>
            </div>

        )
    }
}
