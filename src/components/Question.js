import React from 'react'
// import Filter from './Filter'
import { Link } from 'react-router-dom'

export default function Question(props) {
    var question_data = props.question_data
    var level = question_data.level == 2 ? "Hard" : question_data.level == 1 ? "Medium" : "Easy"

    var filter = question_data.topic_name
    var question_link = question_data.link
    var question_name = question_data.name
    // console.log(question_data)
    return (
        <div>
            <div className="question-box">
                <div className="question">
                    <a className="question-link" href={question_link}>{question_name}</a>
                </div>
                <div className="mb-16">
                    <span className="filter f-12" style={{cursor:"default"}}>{level}</span>
                    <span className="filter f-12" style={{cursor:"default"}}>{filter}</span>
                </div>
                <div className="footer pt-8">
                    <div className="status white">
                        {/* 0,1,2 */}
                        {console.log(question_data.mark)}
                        <label className="r-radio-label">
                            Done
                            <input type="radio" name={question_data.id} id="" status={2} defaultChecked={question_data.mark == 2 ? true : false} onClick={(e)=>props.status_update(e)}/>
                            <span className="r-radio"></span>

                        </label>
                        <label className="r-radio-label">
                            Need to Revise
                            <input type="radio" name={question_data.id} id="" status={1} defaultChecked={question_data.mark == 1 ? true : false} onClick={(e)=>props.status_update(e)}/>
                            <span className="r-radio"></span>

                        </label>
                        <label className="r-radio-label">
                            To-Do
                            <input type="radio" name={question_data.id} id="" status={0} defaultChecked={question_data.mark == 0 ? true : false} onClick={(e)=>props.status_update(e)}/>
                            <span className="r-radio"></span>

                        </label>
                        {/* <label className="r-radio-label">
                            Unattempted
                            <input type="radio" name="status" id="" />
                            <span className="r-radio"></span>

                        </label> */}
                        <div className="friends-stats gray float-end">
                            {question_data.friends} of your friends have already solved the ques
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
