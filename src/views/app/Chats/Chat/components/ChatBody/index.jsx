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
import ImageMessage from "../ImageMessage";

const ChatBody = () => {
  return (
    <div className="chat__inner">
      <Messages>

        {mock.map((item, index) => {
          switch (item.type) {
            case "text": {
              return (
                <Message key={index} message={item}>
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
                <Message key={index} message={item}>
                  <ImageMessage
                  galleryID="gallery"
                  images={[
                    {
                      largeURL:
                        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
                      thumbnailURL:
                        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
                      width: 1875,
                      height: 2500,
                    }
                  ]}
                  />
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
              )
            }
          }
        })}

      </Messages>
    </div>
  );
};

export default ChatBody;
