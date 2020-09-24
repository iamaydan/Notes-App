 import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Icon } from "../components";
import image from "../styles/img";

export const Header = () => {
  return (
    <Container>
      <Logo to="/">
        <img src="/img/notesicon.png" alt="logo" />
        NoteX
      </Logo>
      <div>
        <StyledNavLink to="/notes">
          <Icon src={image.notes} alt="actual logo" />
          Actual
        </StyledNavLink>
        <StyledNavLink to="/archieve">
          <Icon src={image.arch} alt="archieve logo" />
          Archieve
        </StyledNavLink>
        <Divider></Divider>
        <StyledNavLink to="/create">
          <Icon src={image.add} alt="create logo " />
          Create
        </StyledNavLink>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #ffd500;
  div {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled(NavLink)`
  font-size: 25px;
  color: #404040;
  display: flex;
  text-decoration: none;

  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 10px;
  color: grey;
  align-items: center;
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  background: white;
  padding: 5px 8px;
  border-radius: 10px;
  min-width: 130px;
  justify-content: center;
  border: 1.5px solid white;
  transition: all 0.2s ease-in;

  &.active {
    border-color: #988210;
    color: #988210;
    font-weight: bold;
  }

  &:hover {
    color: #988210;
    transform: scale(1.08);
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  background: transparent;
  width: 10px;
  margin: 0 10px;
  height: 25px;
  border-left: 1.5px dotted grey;
  border-right: 1.5px dotted grey;
`;
