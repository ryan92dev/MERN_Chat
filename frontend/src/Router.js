import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./authPages/Login";
import Register from "./authPages/Register";
import MessengerLayout from "./components/layout/MessengerLayout";
import Dash from "./dash";
import PersistAuth from "./features/Auth/PersistAuth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistAuth />}>
          <Route path="/" element={<MessengerLayout />}></Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dash" element={<Dash />} />

        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
