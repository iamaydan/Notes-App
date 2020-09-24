import React from "react";
import styled from "styled-components";

import { deleteNote } from "../../API/fetch";
export const ModalWindow = ({ showModal, setShowModal, id, push, arch }) => {
  const handleClose = () => setShowModal(false);
  const deleteHandler = () => {
    deleteNote(id);
    if (arch === false) {
      push("/notes");
    } else {
      push("/archieve");
    }
  };
  return (
    <>
      {showModal && (
        <ModalContainer>
          <Modal>
            <h1>Do you want to delete this note ?</h1>
            <Button>
              <button onClick={deleteHandler}>Ok</button>
              <button onClick={handleClose}>Cancel</button>
            </Button>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;
const Modal = styled.div`
  width: 300px;
  height: 150px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  h1 {
    font-size: 15px;
  }
`;

const Button = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  button {
    transition: 0.3s ease-in;
    cursor: pointer;
    width: 40%;
    border: none;
    padding: 7px;
    border-radius: 5px;
    background: lightgrey;
    &:focus {
      outline: none;
    }
    &:hover {
      background: grey;
      transform: scale(1.08);
      color: white;
      font-weight: bold;
    }
  }
`;
