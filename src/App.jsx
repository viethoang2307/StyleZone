import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
   const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((prev) => !prev);
  return (
    <>
      <ToastContainer />
      <Navigation collapsed={collapsed} toggleSidebar={toggleSidebar}/>
      <main className={` transition-margin duration-300 mt-16 ${collapsed ? "" : "ml-40"}`}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
