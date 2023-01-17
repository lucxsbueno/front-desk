import React from "react";

import { NavLink } from "react-router-dom";

import "./styles.css";

const Item = (props) => {
  const { chat } = props;

  const { id, name, current_message, profile_picture, unread_messages, hour } = chat;

  const readMessage = unread_messages == 0 ? "chat__current-messages--read" : "";

  return (
    <NavLink to={`/conversas/${id}`} className="chat__item">
      <div className="chat__left">
        <div className="chat__avatar">
          <img src={profile_picture} alt="" className="chat__img" />
        </div>
      </div>

      <div className="chat__right">
        <div className="d-flex flex-row justify-content-space-between">
          <span className="chat__name">{name}</span>
          <span className="text-color">{hour}</span>
        </div>

        <div className="d-flex flex-row justify-content-space-between align-items-center">
          <span className={`chat__current-message ${readMessage}`.trim()}>{current_message}</span>
          {unread_messages > 0 && (
            <span className="chat__unread-message">
              {unread_messages}
            </span>
          )}
        </div>

        <div className="chat__divider" />
      </div>
    </NavLink>
  );
};

export default Item;
