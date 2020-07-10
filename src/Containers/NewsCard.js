import React from "react";
import styled from "styled-components";

const NewsCardStyle = styled.div`
  background: #eeeeee;
  border: 1px solid black;
  margin: 1rem;
  font-size: 10px;
  width: 20vw;
  display: flex;
  flex-flow: column;
  padding: 5px;
  text-align: center;
`;

function NewsCard({ news }) {
  return (
    <NewsCardStyle>
      <h1>{news.title}</h1>
      <h2>{news.description}</h2>
    </NewsCardStyle>
  );
}

export default NewsCard;
