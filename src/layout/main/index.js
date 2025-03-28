import React from "react";
import { useLocation } from "react-router-dom";
import s from "./main.module.scss";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <div className={s.root}>
      <Header />
      <div className={`${!isRootPath ? s.container : ""}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
