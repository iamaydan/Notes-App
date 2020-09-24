import React from "react";
import styled from "styled-components";

export const Icon = ({ src, alt }) => {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
};

const Container = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  width: 33px;
  margin-right: 5px;
  border-radius: 100%;
  background: white;
  img {
    width: 60%;
  }
`;
