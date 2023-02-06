import React from "react";

import { useNavigate } from "react-router-dom";

import Tags from "../../../components/Tags";
import Input from "../../../components/Input";
import Header from "../../../components/Header";
import Button from "../../../components/Button";
import TagBadge from "../../../components/TagBadge";
import InputLabel from "../../../components/InputLabel";
import HeaderButton from "../../../components/HeaderButton";

import { ChevronLeft } from "lucide-react";

import "./styles.css";
import DocDropzone from "../../../components/DocDropzone";

const CustomersEdit = () => {
  const navigate = useNavigate();

  const tags = [
    {
      id: 1,
      name: "item",
    },
    {
      id: 2,
      name: "item-item",
    },
    {
      id: 3,
      name: "item",
    },
    {
      id: 4,
      name: "item-item-item-item",
    },
    {
      id: 5,
      name: "item-item",
    },
    {
      id: 6,
      name: "item-item",
    },
    {
      id: 7,
      name: "item-item",
    },
  ];

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="customer-edit">
      <Header className="header--bg-white">
        <div className="d-flex flex-row align-items-center justify-content-space-between w-100">
          <div className="d-flex flex-row align-items-center">
            <HeaderButton className="mr-10" onClick={goBack}>
              <ChevronLeft />
            </HeaderButton>

            <span className="text-color text-semi-bold">
              Editar dados do cliente
            </span>
          </div>
        </div>
      </Header>

      <div className="customer-edit__body x-p-15 pt-15">
        <p className="text-grey mb-20">
          Aqui você pode editar informações públicas sobre este cliente. Você
          pode mudá-las a qualquer momento que quiser.
        </p>

        <InputLabel label="Nome completo" className="mb-25">
          <Input type="text" placeholder="John Doe" />
        </InputLabel>

        <InputLabel label="Tags" className="mb-25">
          <Input type="text" placeholder="John Doe" className="mb-15" />

          <p className="text-grey mb-15">
            Adicione ou exclua as tags do cliente.
          </p>

          <Tags>
            {tags.map((tag, i) => (
              <TagBadge key={i} tag={tag} />
            ))}
          </Tags>
        </InputLabel>

        <InputLabel label="Enviar documentos" className="mb-25">
          <DocDropzone user={{ docs: [] }} />
        </InputLabel>

        <InputLabel label="Observação" className="mb-25" />
      </div>

      <div className="customer-edit__footer">
        <Button onClick={() => { }}>Salvar alterações</Button>
      </div>
    </div>
  );
};

export default CustomersEdit;
