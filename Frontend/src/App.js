import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTodoPage from "./pages/CreateTodo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createTodo" element={<CreateTodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
