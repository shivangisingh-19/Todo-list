import "../style/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="main">
        <nav className="navbar">
          <a className="title" href="/">
            Todo app
          </a>
          <ul className="nav-list">
            <li>
              <a href="/addtask">Add Task</a>
            </li>
            <li>
              <a href="/">List</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
