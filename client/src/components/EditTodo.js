import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  //editText funcion
  const editText = async (id) => {
    try {
      const body = { description };
      console.log(body);
      const res = await fetch(`http://192.168.1.33:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }, //sadece burda applicaion yazdım diye saatlerce hatayı bulamadım.
        body: JSON.stringify(body),
      });
      window.location = "/"; //refresh yapıyor.
      //console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  //console.log(todo);
  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit TODO
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
