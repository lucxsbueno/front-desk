import React from "react";

import ChatBody from "./components/ChatBody";
import ChatHeader from "./components/ChatHeader";
import ChatFooter from "./components/ChatFooter";

import {
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

import "./styles.css";

const NewChat = () => {
  const params = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isNewChat = searchParams.get("type") == "new";

  return (
    <div className="chat d-flex flex-row">
      <div className="chat__container">
        <ChatHeader location={location} />

        <ChatBody id={params.id} />

        <ChatFooter isNewChat={isNewChat} />
      </div>

      <div className="chat__information">
        <Outlet />
      </div>
    </div>
  );
};

export default NewChat;
