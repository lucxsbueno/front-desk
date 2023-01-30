import React from "react";

import NewChat from "../NewChat";
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

const Chat = () => {
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  if (searchParams.get("type") == "new") {
    return <NewChat data={location.state?.data} />;
  }

  return (
    <div className="d-flex flex-row">
      <div className="chat__container">
        <ChatHeader location={location} />

        <ChatBody id={params.id} />

        <ChatFooter />
      </div>

      <div className="chat__information">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
