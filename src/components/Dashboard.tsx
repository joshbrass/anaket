import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col transition-all duration-200 ease-in-out">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 overflow-y-auto">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;