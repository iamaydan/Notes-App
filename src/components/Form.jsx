import React, { useState, useContext } from "react";
import styled from "styled-components";

import { NotesContext } from "../context/notes";
export const Form = ({
  notes: {
    title,
    text,
    color,
    id,
    date,
    arch,
    closeBtn,
    history: {
      history: { push },
    },
  },
}) => {
  const [fields, setFields] = useState({
    title,
    text,
    color,
  });

  const { noteCreate, editNote } = useContext(NotesContext);

  const fieldsHandler = (e) => {
    const { name, value } = e.target;
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (fields.text === "" || fields.title === "" || fields.color === "") {
      alert("all fields need to be filled");
    } else {
      if (closeBtn === "Create") {
        noteCreate({
          ...fields,
          date: Date.now(),
          arch: false,
        });
        push("/notes");
      } else {
        editNote(id, { ...fields, id, date, arch });
        if (arch == true) {
          push(`/archieve/${id}`);
        } else {
          push(`/notes/${id}`);
        }
      }
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="title"
        onChange={fieldsHandler}
        name="title"
        value={fields.title}
      />
      <Textarea
        type="text"
        placeholder="note"
        onChange={fieldsHandler}
        name="text"
        value={fields.text}
      ></Textarea>
      <Colors>
        <h5>Color : </h5>

        <Check>
          <input
            type="radio"
            name="color"
            value="#2E8B57"
            onChange={fieldsHandler}
          />
          <span style={{ backgroundColor: "#2E8B57" }}></span>
        </Check>

        <Check>
          <input
            type="radio"
            name="color"
            value="#FFA07A"
            onChange={fieldsHandler}
          />
          <span style={{ backgroundColor: "#FFA07A" }}></span>
        </Check>
        <Check>
          <input
            type="radio"
            name="color"
            value="#8A2BE2"
            onChange={fieldsHandler}
          />
          <span style={{ backgroundColor: "#8A2BE2" }}></span>
        </Check>
        <Check>
          <input
            type="radio"
            name="color"
            value="#20B2AA"
            onChange={fieldsHandler}
          />
          <span style={{ backgroundColor: "#20B2AA" }}></span>
        </Check>
        <Check>
          <input
            type="radio"
            name="color"
            value="#FF6347"
            onChange={fieldsHandler}
          />
          <span style={{ backgroundColor: "#FF6347" }}></span>
        </Check>
      </Colors>
      <StyledButton>{closeBtn}</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 45px auto;
  width: 450px;
  padding: 20px 10px;
  background-color: #f8f8f8;
`;

const Input = styled.input`
  border: 1px solid transparent;
  background-color: #e0e0d1;
  display: block;
  margin: 10px auto;
  width: 400px;
  padding: 15px;
  border-radius: 7px;
  &:focus {
    border-color: #ffd500;
    border-radius: 7px;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid transparent;
  display: block;
  background-color: #e0e0d1;
  padding: 15px;
  height: 200px;
  margin: 10px auto;
  width: 400px;
  border-radius: 7px;
  resize: none;
  &:focus {
    border-color: #ffd500;
    outline: none;
    border-radius: 7px;
  }
`;

const StyledButton = styled.button`
  width: 400px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ffd500;
  color: white;
  padding: 10px;
  margin: 10px auto;
  display: block;
  border-radius: 7px;

  &:active {
    outline: none;
    background-color: #988210;
  }

  &:focus {
    outline: none;
  }
`;

const Colors = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Check = styled.label`
  display: inline-block;
  padding-left: 30px;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  input {
    display: none;
  }

  input:checked + span::after {
    content: "";
    position: absolute;
    height: 7px;
    width: 12px;
    border-left: 2.5px solid white;
    border-bottom: 2.5px solid white;
    top: 42%;
    left: 52%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    border: 1px solid #eaeaea;
  }
`;
