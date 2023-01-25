import React from "react";

import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";

import "./styles.css";
import NewChat from "../NewChat";
import ChatHeader from "./components/ChatHeader";

const Chat = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (searchParams.get("type") == "new") {
    return <NewChat data={location.state?.data} />;
  }

  return (
    <div className="d-flex flex-row">
      <div className="chat__container">
        <ChatHeader location={location} />

        <ChatBody />

        <ChatFooter />
      </div>

      <div className="chat__information">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
