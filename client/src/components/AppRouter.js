import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTER } from "../utils/consts";
import { Context } from "..";

const AppRouter = () => {
  const {user} = useContext(Context)

  console.log(user)
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} exact />
      ))}
      <Route path="*" element={ <Navigate to={SHOP_ROUTER}/>}/>
    </Routes>
  );
};

export default AppRouter;
