import React from "react";
import _SideBar from "./_Dashboard_Components/SideBar";
import Header from "./_Dashboard_Components/Header";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <_SideBar />
      </div>
      <div className="md:ml-64 ">
      <Header/>
      <div className="p-10">

        {children}
      </div>
        
      </div>
    </div>
  );
}

export default DashboardLayout;
