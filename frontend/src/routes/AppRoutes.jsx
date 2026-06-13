import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";
import Protected from "../auth/components/Protected";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/"
          element={
            <Protected>
              <h1>HomePage</h1>
            </Protected>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
