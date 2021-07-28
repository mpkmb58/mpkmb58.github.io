import React, {Fragment}from 'react'
import styled from 'styled-components'

const Light = styled.div`
    position: absolute;
    width: 25%;
    aspect-ratio: 1/1;
    /* opacity: 0.5;
    filter: blur(15rem); */
    border-radius: 50%;
    z-index: 1;
`

const BgWrapper = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 1;
`

function BgBlur() {
    return (
        <Fragment>
            <BgWrapper>
                <Light class="bg-red one"></Light>
                <Light class="bg-blue two"></Light>
                <Light class="bg-orange three"></Light>
                <Light class="bg-blue four"></Light>
                <Light class="bg-blue five"></Light>
                <Light class="bg-orange six"></Light>
                <Light class="bg-blue seven"></Light>
                <Light class="bg-red eight"></Light>
            </BgWrapper>
        </Fragment>
    )
}

export default BgBlur
