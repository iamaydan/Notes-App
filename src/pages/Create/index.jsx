import React from "react";

import { Form } from "../../components";

export const Create = ({ history }) => {
  
  return (
    <div>
      <Form notes={{ title: "", text: "", color: "", closeBtn: "Create", history:{history} }} />
    </div>
  );
};
