import React from "react";

import { Link, useParams } from "react-router-dom";
import Header from "../../../../../../components/Header";

import "./styles.css";

const ChatHeader = (props) => {
  const { location } = props;

  const params = useParams();

  return (
    <Header className="header--bg-white bg-white">
      <Link
        to="informacoes"
        state={{
          data: {
            title: location.state?.data?.title,
            profile_picture: location.state?.data?.profile_picture,
            id: params.id,
          },
        }}
        className="d-flex flex-row align-items-center clear-link"
      >
        <div className="avatar avatar--super-sm">
          <img
            alt="Profile user information"
            src={location.state?.data?.profile_picture}
            className="avatar__img"
          />
        </div>
        <span className="d-block ml-10 text-color">
          {location.state?.data?.title}
        </span>
      </Link>
    </Header>
  );
};

export default ChatHeader;
