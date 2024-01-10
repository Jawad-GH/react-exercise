import React, { Component } from 'react'

const Header = (props) => {
    return(
        <div>
            <h1>{props.heading}</h1>
            <h3>{props.slogan}</h3>
        </div>
    )
}

const Exercise1 = () => {


    return(
        <Header heading="Write a heading" slogan="Write a slogan here" />
    )
}

export default Exercise1