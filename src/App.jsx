import Addtask from "./component/Addtask";
import List from "./component/List";
import Update from "./component/Update";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/addtask" element={<Addtask />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
