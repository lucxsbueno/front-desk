import React from "react";

import { NavLink } from "react-router-dom";

import "./styles.css";

const Item = (props) => {
  const { chat } = props;

  const {
    id,
    name,
    // current_message,
    profile_picture,
    // unread_messages,
    // hour,
    is_new,
  } = chat;

  // const readMessage = unread_messages == 0 ? "chat__current-messages--read" : "";

  const navigateTo = is_new ? `/nova-conversa/${id}?type=new` : `/conversas/${id}`;

  return (
    <NavLink
      to={navigateTo}
      state={{
        data: { title: name, profile_picture: profile_picture, id: id },
      }}
      className="chat__item"
    >
      <div className="chat__left">
        <div className="chat__avatar">
          <img src={profile_picture} alt="" className="chat__img" />
        </div>
      </div>

      <div className="chat__right">
        <div className="d-flex flex-row justify-content-space-between">
          <span className="chat__name">{name}</span>
          {/* <span className="text-color">{hour}</span> */}
        </div>

        <div className="d-flex flex-row justify-content-space-between align-items-center">
          <span className={`chat__current-message`.trim()}>
            Lorem ipsum dolor
          </span>
          {/* {unread_messages > 0 && (
            <span className="chat__unread-message">{unread_messages}</span>
          )} */}
        </div>

        <div className="chat__divider" />
      </div>
    </NavLink>
  );
};

export default Item;
