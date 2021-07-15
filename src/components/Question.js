import React from 'react'

export default function Question(props) {
    return (
        <div>
            <div className="question-box">
                <div className="question">
                    {props.question}
                </div>
                <div className="mb-16">
                    {/* {props.filter.map((f,i)=>{
                        
                        <span className="filter f-12">{f}</span>
                    })} */}
                    {/* {console.log(props)} */}
                    <span className="filter f-12">{props.level}</span>
                    <span className="filter f-12">{props.filter}</span>
                </div>
                <div className="footer pt-8">
                    <div className="status white">
                        <label className="r-radio-label">
                            Done
                            <input type="radio" name="status" id="" />
                            <span className="r-radio"></span>

                        </label>
                        <label className="r-radio-label">
                            Need to Revise
                            <input type="radio" name="status" id="" />
                            <span className="r-radio"></span>

                        </label>
                        <label className="r-radio-label">
                            To-Do
                            <input type="radio" name="status" id="" />
                            <span className="r-radio"></span>

                        </label>
                        <div className="friends-stats gray float-end">
                            Two of your friends have already solved the ques
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
