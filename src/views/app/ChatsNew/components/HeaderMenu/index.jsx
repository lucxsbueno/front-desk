import { Filter, X } from "lucide-react";
import React, { useState } from "react";

import Header from "../../../../../components/Header";
import HeaderButton from "../../../../../components/HeaderButton";

const HeaderMenu = () => {
  const [toggle, setToggle] = useState(false);

  const icon = toggle ? <X /> : <Filter />;

  return (
    <Header className="header--bg-white">
      <div className="d-flex flex-row align-items-center justify-content-space-between w-100">
        <span className="text-color text-semi-bold">Nova conversa</span>

        <HeaderButton onClick={() => setToggle(!toggle)}>{icon}</HeaderButton>

        {toggle && (
          <div className="header__filter">
            Aqui ficarão os filtros quando eu tiver vontade de fazer.
            {/* Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. */}
          </div>
        )}
      </div>
    </Header>
  );
};

export default HeaderMenu;
