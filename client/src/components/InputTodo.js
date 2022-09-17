import { Fragment, useState } from "react";
import React from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  console.log(description);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      //localhost yazınca bilgisayarda çalıştı.
      //192.168.1.33 yazınca telefondanda çalıştı.
      const response = await fetch("http://192.168.1.33:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response)
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
