import React from 'react'
import { useState } from 'react';
export default function Filter(props) {
    const [isSelected, setActive] = useState(false);

    const toggleClass = (e) => {
        setActive(!isSelected);
        props.filterData(e,!isSelected)
    };

    return (<> {/* {props.selected ? "asdasd" : "sda"} */}
        <span onClick={(e)=>toggleClass(e)} level_id={props.level_id} topic_id={props.topic_id} className={
            "filter" + (
                isSelected ? " selected" : ""
            )
        }> {
                props.filter
            }</span>
    </>)
}
