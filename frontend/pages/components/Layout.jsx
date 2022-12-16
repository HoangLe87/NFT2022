import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex flex-col grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
