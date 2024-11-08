// src/layouts/MainLayout.tsx
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = () => {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-10 xxl:grid-cols-12 min-h-screen font-poppins bg-base-100">
          
          {/* Left margin column */}
          <div className="hidden lg:block lg:col-span-1 xxl:col-span-2 bg-base-100" /> {/* Side column (3 out of 12) */}
    
          {/* Center content column */}
          <div className="col-span-1 lg:col-span-8 xxl:col-span-8 bg-base-100">
          
          <NavBar />
      <main className="container mx-auto p-4 bg-base-100">
        <Outlet />
      </main>
            
          </div>
    
          {/* Right margin column */}
          <div className="hidden lg:block lg:col-span-1 xxl:col-span-2 bg-base-100" /> {/* Side column (3 out of 12) */}
        </div>
      );
};

export default MainLayout;
