import React from "react";

import pdf from "../../../../../../utils/icons/pdf3x.svg";
import notRead from "../../../../../../utils/icons/not-read.png";
import read from "../../../../../../utils/icons/read.png";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

import "./styles.css";

const DocumentMessage = (props) => {
  const { message } = props;

  const { type, title, srcUrl } = message.body;

  const isMe = message.user_id == 34;

  const isDocumentMe = isMe ? "document--me" : "";

  const isMessageRead = message.is_read ? read : notRead;

  return (
    <div className={`document d-flex flex-row ${isDocumentMe}`}>
      <div className="document__icon-wrapper">
        <img src={pdf} alt="" className="document__icon" />
      </div>
      <div className="document__body d-flex flex-column">
        <span className="document__title">{title}</span>
        <div className="d-flex flex-row align-items-center justify-content-space-between">
          <div className="">
            <span className="document__type">{type} •</span>
            <span className="document__size"> 1.005 B</span>
          </div>

          <div className="d-flex">
            <span className="document__sended-at">{message.timestamp}</span>
            {isMe && <img src={isMessageRead} alt="Mensagem não lida." className="message__read" />}
          </div>
        </div>
      </div>
      <div className="document__download">
        <Link
          to={srcUrl}
          download
          target="_blank"
          className="document__download-bttn"
        >
          <Download />
        </Link>
      </div>
    </div>
  );
};

export default DocumentMessage;
