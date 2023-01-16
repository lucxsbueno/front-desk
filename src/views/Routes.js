import React from "react";

import { Route, Routes } from "react-router-dom";
import AccessReports from "./app/AccessReports";

//views
import Chats from "./app/Chats";
import FavLots from "./app/FavLots";
import Ranking from "./app/Ranking";
import Dashboard from "./app/Dashboard";
import MyAccount from "./app/MyAccount";
import CustomersNew from "./app/CustomersNew";
import MainTemplate from "./app/MainTemplate";
import RouteWithoutIndex from "./app/RouteWithoutIndex";
import CustomersAvailable from "./app/CustomersAvailable";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route index element={<RouteWithoutIndex to="/conversas" />} />
        <Route path="conversas" element={<Chats />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clientes/novos" element={<CustomersNew />} />
        <Route path="clientes/disponiveis" element={<CustomersAvailable />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="lotes-favoritados" element={<FavLots />} />
        <Route path="relatorio-de-acessos" element={<AccessReports />} />
        <Route path="minha-conta" element={<MyAccount />} />
      </Route>
    </Routes>
  );
};
