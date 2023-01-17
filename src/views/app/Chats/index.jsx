import React from "react";

import Item from "./components/Item";
import Section from "./components/Section";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import HeaderMenu from "./components/HeaderMenu";

import chats from "./chats";

import "./styles.css";

const Chats = () => {
  return (
    <div className="chat">
      <div className="chat__menu">
        <HeaderMenu />

        <div className="x-p-15 y-p-10">
          <Input type="text" variant="search" placeholder="Pesquisar" />
        </div>

        <div className="chat__menu-body">

          <Section
            title="Clientes transferidos"
            length={chats.filter((chat) => chat.is_transfered == true).length}
          >
            {chats
              .filter((chat) => chat.is_transfered == true)
              .map((chat, index) => (
                <Item key={index} chat={chat} />
              ))}
          </Section>

          <Section
            title="Novos clientes"
            length={chats.filter((chat) => chat.is_new == true).length}
          >
            {chats
              .filter((chat) => chat.is_new == true)
              .map((chat, index) => (
                <Item key={index} chat={chat} />
              ))}
          </Section>

          <Section
            title="Férias"
            length={chats.filter((chat) => chat.is_vacation == true).length}
          >
            {chats
              .filter((chat) => chat.is_vacation == true)
              .map((chat, index) => (
                <Item key={index} chat={chat} />
              ))}
          </Section>
        </div>

        <div className="chat__menu-footer">
          <Button onClick={() => { }}>Nova conversa</Button>
        </div>
      </div>

      <div className="chat__content">Teste</div>
    </div>
  );
};

export default Chats;
