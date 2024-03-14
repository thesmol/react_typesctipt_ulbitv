import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="navbar__links">
          <Link to="/users">Юзеры</Link>
          <Link to="/todos">Тудушки</Link>
        </div>
        <Routes>
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
