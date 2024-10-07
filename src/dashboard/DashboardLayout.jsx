// import { Sidebar } from "flowbite-react";
import React from "react";
import { Outlet } from "react-router-dom";
// import SideBar from "./Sidebar";
// import Sidebar from "./Sidebar";
import SideBar from "./SideBar";


const DashboardLayout = () => {
  return (
    <>
      <div className="flex gap-5 flex-col md:flex-row">
        {/* <Sidebar /> */}
        <SideBar/>

        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
