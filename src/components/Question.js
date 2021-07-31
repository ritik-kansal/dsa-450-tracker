import React from 'react'
// import Filter from './Filter'
// import { Link } from 'react-router-dom'

function Question(props) {

    var question_data = props.question_data
    var level = question_data.level === 2 ? "Hard" : question_data.level === 1 ? "Medium" : "Easy"

    return (
        <div>
            {console.log("in_question")}
            <div className="question-box">
                <div className="question">
                    <span className="gray">{question_data.id}.</span> <a className="question-link" href={question_data.link} target="blank">{question_data.name}</a>
                </div>
                <div className="mb-16">
                    <span className="filter f-12" style={{ cursor: "default" }}>{level}</span>
                    <span className="filter f-12" style={{ cursor: "default" }}>{question_data.topic_name}</span>
                </div>
                {/* {console.log(question_data.mark === 2,question_data.id)} */}
                <div className="footer pt-8">
                    <div className="status white">
                        <label className="r-radio-label">
                            Done
                            <input type="radio" name={question_data.id} id="" status={2} defaultChecked={question_data.mark === 2 ? true : false} onClick={(e) => props.status_update(e)} />
                            <span className="r-radio"></span>

                        </label>
                        <label className="r-radio-label">
                            Need to Revise
                            <input type="radio" name={question_data.id} id="" status={1} defaultChecked={question_data.mark === 1 ? true : false} onClick={(e) => props.status_update(e)} />
                            <span className="r-radio"></span>

                        </label>
                        <label className="r-radio-label">
                            To-Do
                            <input type="radio" name={question_data.id} id="" status={0} defaultChecked={question_data.mark === 0 ? true : false} onClick={(e) => props.status_update(e)} />
                            <span className="r-radio"></span>

                        </label>
                        <div className="friends-stats gray float-end">
                            {question_data.friends} of your friends have already solved the ques
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default React.memo(Question, (prevProps, nextProps) => {
    return !nextProps.questions_update
}); // if true then it wont render

// export default Question