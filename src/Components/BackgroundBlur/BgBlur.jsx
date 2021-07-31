import React, { Fragment } from 'react'
import styled from 'styled-components'
import './BgBlur.css'

function BgBlur() {

    const BgWrapper = styled.div`
        position: fixed  ;
        display: flex  ;
        width: 100vw   ;
        height: 100vh  ;
        z-index: 0     ;
    `

    const Light =styled.div`
        width: calc(10.5rem + 10vw);
        position: absolute ;
        aspect-ratio: 1/1 ;
        opacity: 0.5;
        filter: blur(280px); 
        border-radius: 50% ;
        z-index: 0 ;
    `

    return (
        <Fragment>
            <BgWrapper>
                <Light className="bg-red one"></Light>
                <Light className="bg-blue two"></Light>
                <Light className="bg-orange three"></Light>
                <Light className="bg-blue four"></Light>
                <Light className="bg-blue five"></Light>
                <Light className="bg-orange  six"></Light>
                <Light className="bg-blue seven"></Light>
                <Light className="bg-red eight"></Light>
            </BgWrapper>
        </Fragment>
    )
}

export default BgBlur
