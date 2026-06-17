// import React from 'react'
import { useState } from "react";
import "../style/addtask.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Addtask() {
  const [task, setTask] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task);
    let result = await fetch(
      "https://todo-backend-j2iq.onrender.com/add-task",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "Application/JSON",
        },
      },
    );
    result = await result.json();
    if (result) {
      navigate("/");
      console.log("Task added successfully");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <form className="form">
          <h1>Add New Task</h1>
          <label htmlFor="title">Title</label>
          <input
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
            onChange={(event) =>
              setTask({ ...task, description: event.target.value })
            }
            className="task-description"
            name="description"
            required
          ></textarea>
          <button onClick={handleSubmit} className="submit-btn">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
