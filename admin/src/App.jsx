import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Component/login/login";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token"):'');
  const url = "https://fullstack-e-commerce-zriy.onrender.com/";

  useEffect(() => {
     localStorage.setItem("token",token);
    
  }, [token]);
  return (
    <div>
      <ToastContainer />
      {token !== ""? (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path="/add" element={<Add url={url} token={token}/>} />
              <Route path="/list" element={<List url={url} token={token} />} />
              <Route path="/orders" element={<Orders url={url} token={token} />} />
            </Routes>
          </div>
        </>
      ):(<Login url={url} setToken={setToken}/>)}
    </div>
  );
}

export default App;
