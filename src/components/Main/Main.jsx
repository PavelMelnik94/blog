import React from 'react'
import { fadeIn } from 'react-animations'
import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

export default function Main( {children} ) {
    return (
        <FadeInDiv id="style-1" className="main ">
{children}
        </FadeInDiv>
    )
}
