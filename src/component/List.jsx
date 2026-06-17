// import React from 'react'

import { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../style/list.css";
import { Link } from "react-router-dom";

export default function List() {
  const [task, setTask] = useState([]);

  const getListData = async () => {
    let list = await fetch("http://localhost:3002/task-list");
    list = await list.json();
    if (list.success) {
      setTask(list.result);
    }
  };

  useEffect(() => {
    getListData();
  }, []);

  const handleDeteleTask = async (id) => {
    let deleteTask = await fetch("http://localhost:3002/delete/" + id, {
      method: "DELETE",
    });
    deleteTask = await deleteTask.json();
    if (deleteTask.success) {
      getListData();
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="todo-list">Todo List</h1>
        <ul className="main-list">
          <li className="list-header">Sr.no</li>
          <li className="list-header">Title</li>
          <li className="list-header">Description</li>
          <li className="list-header">Action</li>

          {task &&
            task.map((item, index) => (
              <Fragment key={item._id}>
                <li className="list-item">{index + 1}</li>
                <li className="list-item">{item.title}</li>
                <li className="list-item">{item.description}</li>
                <li className="list-item">
                  <button
                    className="delete-btn"
                    onClick={() => handleDeteleTask(item._id)}
                  >
                    Delete
                  </button>

                  <Link className="update-btn" to={"/update/" + item._id}>
                    Update
                  </Link>
                </li>
              </Fragment>
            ))}
        </ul>
      </div>
    </div>
  );
}
