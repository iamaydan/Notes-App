const domain = "http://localhost:3001";

function fetchFabric(endpoint, method) {
  return async (params = {}) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let getParams = "";
    if (method === "POST") {
      options.method = method;
      options.body = JSON.stringify(params);
    } else if (method === "GET") {
      getParams += "?";
      for (let key in params) {
        getParams += `${key}=${params[key]}&`;
      }
    }

    const res = await fetch(`${domain}${endpoint}${getParams}`, options);
    return res.json();
  };
}

export const getNotes = fetchFabric("/notes", "GET");
export const createNote = fetchFabric("/notes", "POST");

export const deleteNote = async (id) => {
  const res = await fetch(`${domain}/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const answer = await res.json();
};

export const Request = async (method, params = {}, id) => {
  const res = await fetch(`${domain}/notes/${id}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const answer = await res.json();
};
