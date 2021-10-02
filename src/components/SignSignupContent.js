import React from 'react'

export default function SignSignupContent(props) {
    return (
        <div className="mb-40">
            <div className="f-48 fw-800 mb-20">{props.primary}</div>
            <div className="gray f-24">{props.secondary}</div>
        </div>
    )
}
