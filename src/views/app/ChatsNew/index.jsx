import React from "react";

import mock from "./mock";
import Item from "./components/Item";
import Section from "./components/Section";
import Input from "../../../components/Input";
import HeaderMenu from "./components/HeaderMenu";

import { Outlet } from "react-router-dom";

import "./styles.css";

const ChatsNew = () => {
  return (
    <div className="chat">
      <div className="chat__menu">
        <HeaderMenu />

        <div className="x-p-15 y-p-10">
          <Input type="text" variant="search" placeholder="Pesquisar" />
        </div>

        <div className="chat__menu-body">
          <Section
            title="Conversando"
            length={mock.filter((chat) => chat.is_transfered == true).length}
          >
            {mock
              .filter((chat) => chat.is_transfered == true)
              .map((chat, index) => (
                <Item key={index} chat={chat} />
              ))}
          </Section>

          <Section
            title="Disponíveis"
            length={mock.filter((chat) => chat.is_new == true).length}
          >
            {mock
              .filter((chat) => chat.is_new == true)
              .map((chat, index) => (
                <Item key={index} chat={chat} />
              ))}
          </Section>
        </div>

        <div className="chat__menu-footer" />
      </div>

      <div className="chat__content">
        <Outlet />
      </div>
    </div>
  );
};

export default ChatsNew;
