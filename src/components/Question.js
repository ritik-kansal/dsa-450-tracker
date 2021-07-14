import React from 'react'

export default function Question() {
    return (
        <div>
            <div className="question-box">
                <div className="question">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic itaque quia quasi aperiam nobis perspiciatis!
                </div>
                <div className="mb-16">
                    <span className="filter f-12">Medium</span>
                    <span className="filter f-12">Array</span>
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
