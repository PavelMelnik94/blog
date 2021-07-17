import React from "react";
import ArticleMenu from "./ArticleMenu/ArticleMenu";
import GoBack from "./GoBack/GoBack";
import { fadeIn } from 'react-animations'
import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

export default function Article(props) {
  return (
    <FadeInDiv className="main-post wow-effect" id="style-1">
      <GoBack />

      <div id="style-1" className="post-wrapper ">
        {props.children}
        <ArticleMenu />
      </div>
    </FadeInDiv>
  );
}
