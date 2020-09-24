import React, { useState, useEffect, createContext } from "react";

import { getNotes, Request, createNote } from "../API/fetch";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const answer = await getNotes();
      setData(answer);
    })();
  }, []);

  const arhieveNote = (id, params) => {
    Request("PATCH", params, id);
  };
  const deleteNote = (id, params) => {
    Request("DELETE", params, id);
  };

  const noteCreate = async (params) => {
    const answer = await createNote(params);
  };

  const editNote = (id, params) => {
    Request("PATCH", params, id);
  };

  return (
    <NotesContext.Provider
      value={{ data, arhieveNote, deleteNote, noteCreate, editNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};
