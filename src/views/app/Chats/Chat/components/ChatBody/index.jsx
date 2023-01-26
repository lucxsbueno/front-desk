import React from "react";

import Message from "../Message";
import Messages from "../Messages";
import TextMessage from "../TextMessage";
import Dropdown from "../../../../../../components/Dropdown";
import DropdownLink from "../../../../../../components/DropdownLink";
import DropdownButtonMessage from "../DropdownButtonMessage";
import { ChevronDown } from "lucide-react";

import "./styles.css";

import mock from "../../mock";

const ChatBody = () => {
  return (
    <div className="chat__inner">
      <Messages>

        {mock.map(item => {
          switch (item.type) {
            case "text": {
              return (
                <Message message={item}>
                  <TextMessage hour={item.timestamp}>
                    {item.body}
                  </TextMessage>
                  <Dropdown
                    button={
                      <DropdownButtonMessage>
                        <ChevronDown size={20} />
                      </DropdownButtonMessage>
                    }
                  >
                    <DropdownLink to="/channels/new">New channel</DropdownLink>
                    <DropdownLink to="/">Configurations</DropdownLink>
                    <DropdownLink to="/dashboard">Dashboard</DropdownLink>
                  </Dropdown>
                </Message>
              );
            }

            case "image": {
              return (
                <Message message={item}>
                  teste
                </Message>
              )
            }
          }
        })}

      </Messages>
    </div>
  );
};

export default ChatBody;
