import React from 'react'
import styled, { keyframes} from 'styled-components'

const LoaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #F8F8F8;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    z-index: 99999 !important;
`
const leftToRight = keyframes`
         0%{
            transform: scaleX(0);
        }
        100%{
             transform: scaleX(1);
        }

    `
const LoaderInner = styled.div`
    width: 100vw;
    height: 0.25rem;
    background-color: #343F56;
    transform-origin: left center;
    animation: ${leftToRight} .6s forwards  ; 
  
`


function Loader() {
    return (
        <LoaderWrapper>
            <LoaderInner></LoaderInner>
        </LoaderWrapper>
    )
}

export default Loader
