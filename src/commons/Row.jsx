import React from "react";
import styled from "styled-components";

export const Row = ({ children, columns = 3, gutter = 15 }) => {
  return (
    <RowContainer gutter={gutter}>
      <Column columns={columns}>{children}</Column>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: transparent;
  margin: 0 auto;
`;

const Column = styled.div`
  width: 100%;
  padding: 0 ${p => p.gutter}px ${p => p.gutter * 2}px;
  display: flex;
  background: transparent;
  flex-wrap: wrap;
`;
