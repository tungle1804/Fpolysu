import React from 'react'

export default function iframe(props) {
    return (

        <div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />


    )
}
