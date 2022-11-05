import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        closeOnClick
        newestOnTop
        autoClose={1000}
      />
      <Router />
    </>
  );
}

export default App;
