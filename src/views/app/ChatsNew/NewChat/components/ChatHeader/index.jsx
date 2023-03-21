import React from "react";

import { Search } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../../../components/Header";

import "./styles.css";
import HeaderButton from "../../../../../../components/HeaderButton";

const ChatHeader = (props) => {
  const { location } = props;

  const params = useParams();
  const navigate = useNavigate();

  const openSearch = () => {
    navigate(`/conversas/${params.id}/pesquisar-mensagem`, {
      state: { data: location.state.data },
    });
  };

  return (
    <Header className="header--bg-white bg-white d-flex flex-row align-items-center justify-content-space-between">
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

      <HeaderButton onClick={openSearch}>
        <Search />
      </HeaderButton>
    </Header>
  );
};

export default ChatHeader;
