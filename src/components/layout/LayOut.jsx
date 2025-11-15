import React, { Children } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayOut;
