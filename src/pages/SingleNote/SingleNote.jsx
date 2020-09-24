import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { NotesContext } from "../../context/notes";
import { Notes, Form } from "../../components";
import { Row } from "../../commons";
import { ModalWindow } from "./ModalWindow";

export const SingleNote = ({
  history,
  match: {
    params: { id, title },
  },
}) => {
  const [isForm, setIsForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { data, arhieveNote } = useContext(NotesContext);
  const singleNote = data.find((item) => item.id == id);

  const pushBack = () => {
    if (singleNote) {
      if (singleNote.arch === true) {
        history.push("/archieve");
      } else {
        history.push("/notes");
      }
    }
  };

  const archieveNoteHandeler = () => {
    arhieveNote(singleNote.id, {
      ...singleNote,
      arch: !singleNote.arch,
    });
  };

  return (
    <Fixed>
      {singleNote && (
        <Container>
          <NoteContainer>
            <Row columns={3}>
              <Notes
                notes={singleNote}
                style={{
                  width: 1,
                  height: 450,
                  overflow: "none",
                  display: false,
                }}
              />
            </Row>
          </NoteContainer>
          <ButtonContainer>
            <StyledButton to="/notes" onClick={() => setIsForm(true)}>
              Edit
            </StyledButton>
            <StyledNavLink
              to={singleNote.arch ? "/notes" : "/archieve"}
              onClick={archieveNoteHandeler}
            >
              {singleNote.arch ? "Unarchive" : "Archieve"}
            </StyledNavLink>
            <StyledButton onClick={() => setShowModal(true)}>
              Delete
            </StyledButton>
          </ButtonContainer>
          <CloseBtn onClick={pushBack}>X</CloseBtn>
          <ModalWindow
            showModal={showModal}
            setShowModal={setShowModal}
            id={id}
            push={history.push}
            arch={singleNote.arch}
          />
        </Container>
      )}

      {isForm && (
        <FormContainer>
          {singleNote && (
            <Form
              notes={{
                ...singleNote,
                closeBtn: "Confirm",
                history: { history },
              }}
            />
          )}
          <CloseBtn onClick={() => setIsForm(false)}>X</CloseBtn>
        </FormContainer>
      )}
    </Fixed>
  );
};

const Fixed = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  width: 600px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  position: relative;
`;
const NoteContainer = styled.div`
  width: 400px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  width: 200px;
  height: 506px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  width: 500px;
  height: 526px;
  border-radius: 10px;
  margin-left: 10px;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: 80%;
  padding: 15px 20px;
  background: white;
  margin: 10px auto;
  text-align: center;
  text-transform: uppercase;
  border-radius: 7px;
  color: black;
  font-size: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in;

  &.active {
    border-color: #988210;
  }
  &:hover {
    color: #ffd500;
    transform: scale(1.08);
    text-decoration: none;
    font-weight: bolder;
  }

  &:focus {
    outline: none;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 7px;
  left: 93%;
  padding: 7px;
  border-radius: 7px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 25px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  display: block;
  cursor: pointer;
  width: 80%;
  padding: 15px 20px;
  background: white;
  margin: 10px auto;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  border-radius: 7px;
  color: black;
  font-size: 12px;
  border: 2px solid transparent;

  &.active {
    border-color: #988210;
  }
  &:hover {
    color: #ffd500;
    font-weight: bolder;
    transform: scale(1.08);
  }
  &:focus {
    outline: none;
  }
`;
