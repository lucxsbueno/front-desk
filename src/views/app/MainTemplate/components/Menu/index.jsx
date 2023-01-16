import React from "react";

import {
  Star,
  User,
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
        <Link icon={<MessageSquare />} title="Conversas" to="/" active={true} />
        <Link icon={<LineChart />} title="Dashboard" to="/" />
        <Link icon={<Users />} title="Meus clientes">
          <Link title="Novos" />
          <Link title="Disponíveis" />
        </Link>
      </Nav>

      <Nav>
        <Link icon={<BarChart2 />} title="Ranking" to="/" />
        <Link icon={<Star />} title="Lotes favoritados" to="/" />
        <Link icon={<BookOpen />} title="Relatório de acessos" to="/" />
      </Nav>

      <Nav>
        <Link icon={<User />} title="Minha conta" to="/" />
        <Link icon={<LogOut />} title="Sair" to="/" />
      </Nav>
    </div>
  );
};

export default Menu;
