import React from "react";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import HeaderMenu from "./components/HeaderMenu";

import "./styles.css";

const Chats = () => {
  return (
    <div className="chat">
      <div className="chat__menu">
        <HeaderMenu />

        <div className="x-p-15 y-p-10">
          <Input type="text" variant="search" placeholder="Pesquisar" />
        </div>

        <div className="chat__menu-body">
          <div className="x-p-15 y-p-15">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            sapien vel lacus aliquet viverra sed at metus. Aliquam vel erat
            elit. Sed euismod vitae tellus vel tincidunt. Morbi finibus accumsan
            lacus, ut vehicula dui sodales vitae. Nam purus turpis, euismod ac
            erat vitae, rutrum posuere arcu. Quisque gravida consectetur
            iaculis. Fusce sit amet mauris porta, pellentesque sapien eget,
            vehicula sapien. Nam quis elementum neque. Phasellus porta mattis
            ipsum semper ultrices. Quisque a ex interdum, venenatis felis non,
            ornare nunc. Nam finibus iaculis tellus, vitae vulputate sem
            placerat in. Vivamus ut tincidunt erat. Nulla egestas interdum
            pretium. Morbi nec lorem id erat lobortis imperdiet in et mi.
            Pellentesque facilisis aliquet ante ac interdum. Fusce vel erat
            tincidunt, viverra ligula at, dictum magna. Etiam placerat nisi eget
            eros varius gravida. Donec semper nisl quis interdum mollis.
            Maecenas sed dignissim metus, eget sodales erat. Fusce nisl eros,
            fringilla at ullamcorper non, finibus viverra orci. Maecenas porta
            tincidunt velit sed vestibulum. Etiam at lorem tellus. Etiam
            facilisis nibh in viverra commodo. Duis sed orci posuere, varius
            enim et, ornare nibh. Sed a nisi non justo molestie condimentum. Nam
            dui ligula, faucibus vitae euismod vitae, lacinia sit amet metus.
            Etiam aliquam semper imperdiet. Ut congue finibus ante sed egestas.
            Fusce sollicitudin egestas fringilla. Aenean vitae consectetur nibh.
            Integer a nisl et libero rutrum lacinia. In sit amet enim eu magna
            auctor iaculis. Fusce orci dolor, scelerisque in interdum eget,
            maximus id erat. Vestibulum non pharetra odio. Ut arcu quam, posuere
            non elit nec, ornare imperdiet lacus. Etiam facilisis feugiat lorem,
            ac euismod urna feugiat at. Morbi pellentesque non massa non
            bibendum. Vestibulum euismod neque nec sapien tristique porttitor.
            Integer id dolor libero. Suspendisse suscipit sollicitudin
            malesuada. Etiam ultrices pharetra neque, non hendrerit est. Cras
            lobortis neque dolor, quis pulvinar urna rhoncus at. */}
          </div>
        </div>

        <div className="chat__menu-footer">
          <Button onClick={() => {}}>Nova conversa</Button>
        </div>
      </div>

      <div className="chat__content">Teste</div>
    </div>
  );
};

export default Chats;
