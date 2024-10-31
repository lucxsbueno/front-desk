import React from "react";

import {
  Star,
  Users,
  LogOut,
  BookOpen,
  BarChart2,
  LineChart,
  MessageSquare,
} from "lucide-react";

import Nav from "../Nav";
import Link from "../Link";

import "./styles.css";

const Menu = () => {
  return (
    <div className="main-template__menu">
      <Nav>
        <Link
          icon={<MessageSquare />}
          title="Conversas"
          to="/conversas"
          active={true}
        />
        <Link icon={<LineChart />} title="Dashboard" to="/dashboard" />
        <Link icon={<Users />} title="Base de clientes" to="/clientes" />
        {/* <Link icon={<Users />} title="Meus clientes">
          <ul>
            <Link title="Novos" to="clientes/novos" />
            <Link title="Disponíveis" to="clientes/disponiveis" />
          </ul>
        </Link> */}
      </Nav>

      <Nav>
        <Link icon={<BarChart2 />} title="Ranking" to="/ranking" />
        <Link
          icon={<Star />}
          title="Lorem ipsum"
          to="/lorem-ipsum"
        />
        <Link
          icon={<BookOpen />}
          title="Relatório de acessos"
          to="/relatorio-de-acessos"
        />
      </Nav>

      <Nav>
        <Link icon={<LogOut />} title="Sair" />
      </Nav>
    </div>
  );
};

export default Menu;
