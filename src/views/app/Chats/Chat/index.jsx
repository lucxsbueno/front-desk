import React from "react";

import Header from "../../../../components/Header";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import "./styles.css";

const Chat = () => {
  const params = useParams();
  const location = useLocation();

  return (
    <div className="d-flex flex-row">
      <div className="chat__container">
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

        <div className="chat__inner" />

        <div className="chat__footer" />
      </div>

      <div className="chat__information">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
