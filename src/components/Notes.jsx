import React, { useContext } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { NotesContext } from "../context/notes";
export const Notes = ({
  notes: { id, text, title, date, color, arch },
  style: { width, height, overflow, display },
}) => {
  const notes = { id, text, title, color, date };

  const dateFormatter = (val) => (val < 10 ? `0${val}` : val);
  const dateObj = new Date(date);
  const day = dateFormatter(dateObj.getDay());
  const month = dateFormatter(dateObj.getMonth());
  const year = dateObj.getFullYear();

  const { arhieveNote } = useContext(NotesContext);

  const archieveHandler = (e) => {
    e.preventDefault();
    arhieveNote(id, { ...notes, arch: !arch });
  };

  return (
    <Container color={color} width={width} height={height} overflow={overflow}>
      <Header to={arch ? `/archieve/${id}` : `/notes/${id}`}>
        <Title>{title}</Title>
        <StyledDate>
          {day}/{month}/{year}
        </StyledDate>
      </Header>

      <Text>{text}</Text>
      {display && (
        <Label>
          <CheckInput
            type="checkbox"
            name="arch"
            checked={arch}
            onChange={(e) => {
              archieveHandler(e);
            }}
          />
          <CheckSpan></CheckSpan>
        </Label>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${(p) => p.color};
  margin: 28px;

  width: calc(100% / ${(p) => p.width});
  padding: 20px;
  height: ${(p) => p.height}px;
  overflow: ${(p) => p.overflow};
  box-shadow: inset 0px -20px 18px -8px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-out;
  border-radius: 12px;
  hr {
    width: 200px;
  }
  &:hover {
    box-shadow: inset 0px -49px 22px -45px rgba(0, 0, 0, 0.75);
  }
`;

const Header = styled(Link)`
  padding: 7px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const StyledDate = styled.div`
  font-size: 13px;
  margin-left: 10px;
  color: white;
`;

const Text = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 80%;
  left: 80%;
`;

const CheckInput = styled.input`
  -webkit-appearance: none;
  visibility: hidden;
  display: none;

  &:checked + span {
    background: white;
  }
  &:checked + span::before {
    transform: translate(-50px);
  }

  &:checked + span::after {
    transform: translate(0px);
  }
`;

const CheckSpan = styled.span`
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  background: white;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s ease-in;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    background: green;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    background: #092c3e;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: all 0.2s ease;
    transform: translate(50px);
  }
`;
