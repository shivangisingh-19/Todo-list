// import React from 'react'
import { useEffect, useState } from "react";
import "../style/addtask.css";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [task, setTask] = useState({ title: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  const getTaskFetch = async (id) => {
    let editTask = await fetch(`http://localhost:3002/task/` + id);
    editTask = await editTask.json();
    if (editTask.result) {
      setTask(editTask.result);
    }
  };

  useEffect(() => {
    getTaskFetch(id);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    let updatedTask = await fetch("http://localhost:3002/update-task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    updatedTask = await updatedTask.json();
    if (updatedTask) {
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <form className="form">
          <h1>Update Task</h1>
          <label htmlFor="title">Title</label>
          <input
            value={task.title}
            onChange={(event) =>
              setTask({ ...task, title: event.target.value })
            }
            type="text"
            className="task-title"
            name="title"
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            value={task?.description}
            onChange={(event) =>
              setTask({ ...task, description: event.target.value })
            }
            className="task-description"
            name="description"
            required
          ></textarea>
          <button onClick={handleUpdate} className="submit-btn">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}
