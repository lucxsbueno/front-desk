import React from "react";

import Header from "./Header";
import Tags from "../../../components/Tags";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import TagBadge from "../../../components/TagBadge";
import InputLabel from "../../../components/InputLabel";
import DocDropzone from "../../../components/DocDropzone";
import Textarea from "../../../components/Forms/Textarea";
import RadioGroup from "../../../components/Forms/RadioGroup";
import RadioButton from "../../../components/Forms/RadioButton";

import "./styles.css";

const CustomersEdit = () => {
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
      name: "item-item-item",
    },
    {
      id: 5,
      name: "item-item",
    },
    {
      id: 6,
      name: "item",
    },
    {
      id: 7,
      name: "item-item",
    }
  ];

  return (
    <div className="customer-edit">
      <Header />

      <div className="customer-edit__body pt-15">
        <p className="text-grey mb-20 x-p-15">
          Aqui você pode editar informações públicas sobre este cliente. Você
          pode mudá-las a qualquer momento que quiser.
        </p>

        <InputLabel label="Nome completo">
          <Input type="text" placeholder="John Doe" className="mb-10" />
          <Button onClick={() => { }}>Salvar nome</Button>
        </InputLabel>

        <InputLabel label="Tags">
          <Input
            type="text"
            placeholder="Ex: bom. Pressione [ENTER] para adicionar."
            className="mb-15"
          />

          <p className="text-grey mb-15">
            Adicione ou exclua as tags do cliente.
          </p>

          <Tags>
            {tags.map((tag, i) => <TagBadge key={i} tag={tag} />)}
          </Tags>
        </InputLabel>

        <InputLabel label="Enviar documentos">
          <DocDropzone user={{ docs: [] }} />
        </InputLabel>

        <InputLabel label="Observações">
          <Textarea rows={4} className="mb-10" />
          <Button onClick={() => { }}>Salvar observação</Button>
        </InputLabel>

        <InputLabel label="Trocar telefone">
          <p className="text-grey mb-15">Escolha um número para alterar</p>

          <RadioGroup className="mb-10">
            <RadioButton name="phone" value="1">
              Telefone 1
            </RadioButton>
            <RadioButton name="phone" value="2">
              Telefone 2
            </RadioButton>
          </RadioGroup>

          <Input
            type="text"
            placeholder="Ex: (47) 0 0000-0000"
            className="mb-15"
          />

          <Button onClick={() => { }}>Alterar número</Button>
        </InputLabel>
      </div>

      {/* <div className="customer-edit__footer" /> */}
    </div>
  );
};

export default CustomersEdit;
