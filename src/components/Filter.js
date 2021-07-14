import React from 'react'

export default function Filter(props) {
    return (<> {/* {props.selected ? "asdasd" : "sda"} */}
        <span className={
            "filter" + (
            props.selected ? " selected" : ""
        )
        }> {
            props.filter
        }</span>
    </>)
}
