import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Main layout component that wraps all pages
 */
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout; 