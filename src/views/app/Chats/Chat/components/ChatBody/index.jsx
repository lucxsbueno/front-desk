import { ChevronDown } from "lucide-react";
import React from "react";
import Dropdown from "../../../../../../components/Dropdown";
import DropdownLink from "../../../../../../components/DropdownLink";
import DropdownButtonMessage from "../DropdownButtonMessage";

import Message from "../Message";
import Messages from "../Messages";
import TextMessage from "../TextMessage";

import "./styles.css";

const ChatBody = () => {
  return (
    <div className="chat__inner">
      <Messages>

        <Message>
          <TextMessage>
            Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque.
          </TextMessage>
          <Dropdown button={
            <DropdownButtonMessage>
              <ChevronDown size={20} />
            </DropdownButtonMessage>
          }>
            <DropdownLink to="/channels/new">New channel</DropdownLink>
            <DropdownLink to="/">Configurations</DropdownLink>
            <DropdownLink to="/dashboard">Dashboard</DropdownLink>
          </Dropdown>
        </Message>

        <Message className="message--me">
          <Dropdown button={
            <DropdownButtonMessage>
              <ChevronDown size={20} />
            </DropdownButtonMessage>
          }>
            <DropdownLink to="/channels/new">New channel</DropdownLink>
            <DropdownLink to="/">Configurations</DropdownLink>
            <DropdownLink to="/dashboard">Dashboard</DropdownLink>
          </Dropdown>
          <TextMessage>
            Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque. Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque.
          </TextMessage>
        </Message>

        <Message className="message--me">
          <Dropdown button={
            <DropdownButtonMessage>
              <ChevronDown size={20} />
            </DropdownButtonMessage>
          }>
            <DropdownLink to="/channels/new">New channel</DropdownLink>
            <DropdownLink to="/">Configurations</DropdownLink>
            <DropdownLink to="/dashboard">Dashboard</DropdownLink>
          </Dropdown>
          <TextMessage>
            Lorem ipsum dolor sit amet, consectetur.
          </TextMessage>
        </Message>

        <Message>
          <TextMessage>
            Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque.
          </TextMessage>
          <Dropdown button={
            <DropdownButtonMessage>
              <ChevronDown size={20} />
            </DropdownButtonMessage>
          }>
            <DropdownLink to="/channels/new">New channel</DropdownLink>
            <DropdownLink to="/">Configurations</DropdownLink>
            <DropdownLink to="/dashboard">Dashboard</DropdownLink>
          </Dropdown>
        </Message>

        <Message>
          <TextMessage>
            Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque. . Praesent diam ante, scelerisque. Praesent diam ante, scelerisque
          </TextMessage>
          <Dropdown button={
            <DropdownButtonMessage>
              <ChevronDown size={20} />
            </DropdownButtonMessage>
          }>
            <DropdownLink to="/channels/new">New channel</DropdownLink>
            <DropdownLink to="/">Configurations</DropdownLink>
            <DropdownLink to="/dashboard">Dashboard</DropdownLink>
          </Dropdown>
        </Message>

        <Message>
          <TextMessage>
            Lorem ipsum dolor sit amet, consectetur. Praesent diam ante, scelerisque.. Praesent diam ante, scelerisque
          </TextMessage>
          <Dropdown button={
            <DropdownButtonMessage>
              <ChevronDown size={20} />
            </DropdownButtonMessage>
          }>
            <DropdownLink to="/channels/new">New channel</DropdownLink>
            <DropdownLink to="/">Configurations</DropdownLink>
            <DropdownLink to="/dashboard">Dashboard</DropdownLink>
          </Dropdown>
        </Message>

        <Message>
          <TextMessage>
            Lorem ipsum dolor sit amet, consectetur.
          </TextMessage>
          <Dropdown button={
            <DropdownButtonMessage>
              <ChevronDown size={20} />
            </DropdownButtonMessage>
          }>
            <DropdownLink to="/channels/new">New channel</DropdownLink>
            <DropdownLink to="/">Configurations</DropdownLink>
            <DropdownLink to="/dashboard">Dashboard</DropdownLink>
          </Dropdown>
        </Message>
      </Messages>
    </div>
  );
};

export default ChatBody;
