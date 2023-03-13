import React from "react";

import Tags from "../../../components/Tags";
import CustomersTable from "./CustomersTable";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import Pagination from "../../../components/Pagination";
import InputLabel from "../../../components/InputLabel";
import RadioGroup from "../../../components/Forms/RadioGroup";
import RadioButton from "../../../components/Forms/RadioButton";
import CheckboxTagsBadge from "../../../components/Tags/CheckboxTagsBadge";

import { Outlet } from "react-router-dom";

import "./styles.css";

const CustomersNew = () => {
  return (
    <div className="customers-new">
      <div className="customers-new__left">
        <Header className="header--bg-white bg-light">Base de clientes</Header>

        <div className="customers-new__container">
          <div className="filters">
            <p className="text-grey x-p-15 y-p-15">
              Aqui você pode filtrar seus resultados e buscar por clientes
              específicos.
            </p>

            <InputLabel label="Tags">
              <Input
                className="mb-15"
                type="text"
                variant="search"
                placeholder="Pesquisar"
              />

              <Tags>
                <CheckboxTagsBadge tag={{ name: "item-item" }} />
                <CheckboxTagsBadge tag={{ name: "item" }} />
                <CheckboxTagsBadge tag={{ name: "item" }} />
                <CheckboxTagsBadge tag={{ name: "item-item-item" }} />
                <CheckboxTagsBadge tag={{ name: "item-utem" }} />
                <CheckboxTagsBadge tag={{ name: "item" }} />
              </Tags>
            </InputLabel>

            <InputLabel label="Último acesso">
              <RadioGroup>
                <RadioButton name="access" value="1">
                  Últimos 7 dias
                </RadioButton>
                <RadioButton name="access" value="2">
                  7 até 30 dias
                </RadioButton>
                <RadioButton name="access" value="3">
                  30 dias até 1 ano
                </RadioButton>
                <RadioButton name="access" value="4">
                  Mais de 1 ano
                </RadioButton>
              </RadioGroup>
            </InputLabel>

            <InputLabel label="Redes sociais">
              <RadioGroup>
                <RadioButton name="social" value="1">
                  WhatsApp
                </RadioButton>
                <RadioButton name="social" value="2">
                  Telegram
                </RadioButton>
                <RadioButton name="social" value="3">
                  Instagram
                </RadioButton>
              </RadioGroup>
            </InputLabel>

            <InputLabel label="Nome completo">
              <Input type="text" placeholder="João da Silva" />
            </InputLabel>

            <InputLabel label="CPF">
              <Input type="text" placeholder="Placeholder" />
            </InputLabel>

            <InputLabel label="RG">
              <Input type="text" placeholder="Placeholder" />
            </InputLabel>

            <InputLabel label="E-mail">
              <Input type="text" placeholder="exemplo@exemplo.com" />
            </InputLabel>

            <div className="x-p-15 mb-15">
              <Button className="w-100" onClick={() => {}}>
                Aplicar filtros
              </Button>
            </div>
          </div>

          <div className="customers-new__table">
            <div className="d-flex flex-row justify-content-space-between align-items-center mb-15">
              <span className="text-color">34 clientes</span>

              <div className="customers-nwe__table--right d-flex flex-row align-items-center">
                <Pagination />
              </div>
            </div>

            <CustomersTable />
          </div>
        </div>
      </div>

      <div className="customers-new__right">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomersNew;
