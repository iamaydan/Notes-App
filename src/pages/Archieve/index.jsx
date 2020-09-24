import React, { useContext } from "react";
import { Route } from "react-router-dom";

import { Notes } from "../../components";
import { Row } from "../../commons";
import { NotesContext } from "../../context/notes";
import { SingleNote } from "../SingleNote";

export const Archieve = () => {
  const { data } = useContext(NotesContext);
  return (
    <>
      <Row columns={4}>
        {data
          .filter((item) => item.arch === true)
          .map((item) => (
            <Notes
              key={item.id}
              notes={item}
              style={{
                width: 5,
                height: 210,
                overflow: "hidden",
                display: true,
              }}
            />
          ))}
      </Row>
      <Route path="/archieve/:id" component={SingleNote} />
    </>
  );
};
