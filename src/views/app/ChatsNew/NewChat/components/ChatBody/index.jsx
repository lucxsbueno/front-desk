import React, { useRef, useEffect, useState } from "react";

import mock from "../../mock";
import { ChevronDown } from "lucide-react";

import Message from "../Message";
import Messages from "../Messages";
import TextMessage from "../TextMessage";
import VideoMessage from "../VideoMessage";
import ImageMessage from "../ImageMessage";
import DocumentMessage from "../DocumentMessage";
import Dropdown from "../../../../../../components/Dropdown";
import DropdownButtonMessage from "../DropdownButtonMessage";
import DropdownLink from "../../../../../../components/DropdownLink";
import SliderGallery from "../../../../../../components/SliderGallery";

import "./styles.css";
import AudioMessage from "../AudioMessage";

const ChatBody = (props) => {
  const [index, setIndex] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);
  const messagesEndRef = useRef(null);

  const supportedTypes = ["image", "video"];

  const newArr = mock.filter((message) =>
    supportedTypes.includes(message.type)
  );

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 200);
  }, [props.id]);

  return (
    <div className="chat__inner">
      <SliderGallery
        gallery={newArr}
        index={index}
        setIndex={setIndex}
        openGallery={openGallery}
        setOpenGallery={setOpenGallery}
      />

      <Messages>
        {mock.map((item, i) => {
          switch (item.type) {
            case "text": {
              return (
                <Message key={i} message={item}>
                  <TextMessage
                    hour={item.timestamp}
                    isRead={item.is_read}
                    message={item}
                  >
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
                <Message key={i} message={item}>
                  <ImageMessage
                    message={item}
                    index={i}
                    setIndex={setIndex}
                    openGallery={openGallery}
                    setOpenGallery={setOpenGallery}
                  />
                </Message>
              );
            }

            case "video": {
              return (
                <Message key={i} message={item}>
                  <VideoMessage
                    message={item}
                    videoMetadata={item.body}
                    index={i}
                    setIndex={setIndex}
                    openGallery={openGallery}
                    setOpenGallery={setOpenGallery}
                  />
                </Message>
              );
            }

            case "audio": {
              return (
                <Message key={i} message={item}>
                  <AudioMessage message={item} />
                </Message>
              );
            }

            case "document": {
              return (
                <Message key={i} message={item}>
                  <DocumentMessage message={item} />
                </Message>
              );
            }
          }
        })}
        <div ref={messagesEndRef} />
      </Messages>
    </div>
  );
};

export default ChatBody;
