import React, { Fragment } from 'react'
import styled from 'styled-components'
import './BgBlur.css'

function BgBlur() {
    return (
        <Fragment>
            <div className="bg-wrapper">
                <div className="bg-red light one"></div>
                <div className="bg-blue light two"></div>
                <div className="bg-orange light three"></div>
                <div className="bg-blue light four"></div>
                <div className="bg-blue light five"></div>
                <div className="bg-orange  light six"></div>
                <div className="bg-blue light seven"></div>
                <div className="bg-red light eight"></div>
            </div>
        </Fragment>
    )
}

export default BgBlur
