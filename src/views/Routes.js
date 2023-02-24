import React from "react";

import { Route, Routes } from "react-router-dom";

//views
import Chats from "./app/Chats";
import Chat from "./app/Chats/Chat";
import FavLots from "./app/FavLots";
import Ranking from "./app/Ranking";
import Dashboard from "./app/Dashboard";
import MyAccount from "./app/MyAccount";
import Information from "./app/Information";
import ChatIndex from "./app/Chats/ChatIndex";
import CustomersNew from "./app/CustomersNew";
import MainTemplate from "./app/MainTemplate";
import Tags from "./app/MyAccount/pages/Tags";
import AccessReports from "./app/AccessReports";
import CustomersEdit from "./app/CustomersEdit";
import SearchMessages from "./app/SearchMessages";
import Presets from "./app/MyAccount/pages/Presets";
import RouteWithoutIndex from "./app/RouteWithoutIndex";
import CallsHistory from "./app/MyAccount/pages/CallsHistory";

//auth
import Signin from "./auth/Signin";
import NotFound from "./auth/NotFound";
import SendedEmail from "./auth/SendedEmail";
import InvalidToken from "./auth/InvalidToken";
import ResetPassword from "./auth/ResetPassword";
import SendEmailValidate from "./auth/SendEmailValidate";
import ResetPasswordWrapper from "./auth/ResetPasswordWrapper";
import AuthTemplate from "./auth/AuthTemplate";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route index element={<RouteWithoutIndex to="/conversas" />} />
        <Route path="conversas" element={<Chats />}>
          <Route index element={<ChatIndex />} />
          <Route path=":id" element={<Chat />}>
            <Route path="informacoes" element={<Information />} />
            <Route path="pesquisar-mensagem" element={<SearchMessages />} />
            <Route path="editar-cliente" element={<CustomersEdit />} />
          </Route>
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clientes" element={<CustomersNew />}>
          <Route path=":id" element={<Information />} />
        </Route>
        <Route path="ranking" element={<Ranking />} />
        <Route path="lotes-favoritados" element={<FavLots />} />
        <Route path="relatorio-de-acessos" element={<AccessReports />} />
        <Route path="minha-conta" element={<MyAccount />}>
          <Route index element={<CallsHistory />} />
          <Route path="presets" element={<Presets />} />
          <Route path="tags" element={<Tags />} />
        </Route>
      </Route>
    </Routes>
  );
};

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthTemplate />}>
        <Route path="/" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="esqueci-minha-senha" element={<ResetPasswordWrapper />}>
          <Route index element={<SendEmailValidate />} />
          <Route path=":token" element={<ResetPassword />} />
          <Route path="email-enviado" element={<SendedEmail />} />
          <Route path="token-invalido" element={<InvalidToken />} />
        </Route>
      </Route>
    </Routes>
  );
};
