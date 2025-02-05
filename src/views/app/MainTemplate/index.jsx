import React, { useState } from "react";

import { useTheme } from "../../../utils/hooks/useTheme";

import Menu from "./components/Menu";
import Logo from "../../../components/Logo";
import Header from "../../../components/Header";
import ProfileBadge from "./components/ProfileBadge";
import HeaderButton from "../../../components/HeaderButton";
import InternetError from "../../../components/InternetError";
import DarkmodeToggleStatic from "../../../components/DarkmodeToggleStatic";

import { MenuIcon, X } from "lucide-react";
import { Outlet } from "react-router-dom";

import "./styles.css";

const MainTemplate = () => {
  const [open, setOpen] = useState(true);
  const { theme } = useTheme();

  const isOpen = open ? "main-template" : "main-template main-template--close";

  return (
    <div className={isOpen} data-theme={theme}>
      <div className="main-template__nav">
        <Header>
          <div className="w-100 d-flex flex-row align-items-center justify-content-space-between">
            {open && <Logo className="ml-10" />}

            {open ? (
              <HeaderButton
                className="header__bttn--dark-bg"
                onClick={() => setOpen(!open)}
              >
                <X />
              </HeaderButton>
            ) : (
              <HeaderButton
                className="header__bttn--dark-bg ml-5 mr-5"
                onClick={() => setOpen(!open)}
              >
                <MenuIcon />
              </HeaderButton>
            )}
          </div>
        </Header>

        <div className="main-template__body">
          <Menu />
        </div>

        <div className="main-template__footer">
          <DarkmodeToggleStatic />
          <ProfileBadge />
          <InternetError />
        </div>
      </div>

      <div className="main-template__content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainTemplate;
