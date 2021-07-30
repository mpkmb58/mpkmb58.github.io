import styled from "styled-components";

export const Iframe = styled.iframe`
    width : 46vmax;
    aspect-ratio: 16/9;
    border: 2px solid grey;

    @media screen and (max-width : 992px) {
        width : 80%;
        height: 50vh;
    }

`