import React, { useRef, useState } from "react";

import Box from "../Box";

import { Link } from "react-router-dom";

import "./styles.css";

export const fastMessages = [
  {
    id: 1,
    body: "Olá, bom dia!",
  },
  {
    id: 2,
    body: "Eu me chamo Lucas Bueno, e falo do Leilão Usadão Máquinas",
  },
  {
    id: 3,
    body: "Pazer em conhecê-lo",
  },
  {
    id: 4,
    body: "Entrei em contato para saber se está precisando de algum equipamento",
  },
  {
    id: 5,
    body: "Lorem ipsum",
  },
  {
    id: 6,
    body: "Lorem ipsum dolor",
  },
  {
    id: 7,
    body: "Lorem ipsum dolor consectur dipsilim gravida",
  },
];

export const presets = [
  {
    id: 1,
    title: "/visitacao",
    body: "Os equipamentos com suas respectivas fotos e descrições poderão ser visualizados através do site Usadão Máquinas url www.usadaomaquinas.com.br ou, ainda, pessoalmente, devendo o cliente interessado solicitar o agendamento de visita. Para agendar uma visita aos equipamentos, o cliente deverá efetuar um lance de interesse no lote desejado e entrar em contato no telefone (47) 3311-0550. As visitas encerram-se 24 horas antes do encerramento do leilão. Não serão aceitas reclamações posteriores referentes a fotos, descrições e possíveis erros nos laudos dos produtos. A VIA MÁQUINAS não se responsabiliza por eventuais promessas ou avaliações feitas por telefone ou trocas de mensagens junto aos vendedores. RECOMENDAMOS A VISITAÇÃO DOS BENS PARA POSTERIOR COMPRA. OS BENS SERÃO VENDIDOS NO ESTADO QUE SE ENCONTRAM. Eventuais danos aos bens expostos durante a visitação deverão ser ressarcidos ao comitente/vendedor.",
  },
  {
    id: 2,
    title: "/retirada",
    body: "Os bens poderão ser retirados, satisfeitos todos os pagamentos e procedimentos legais, a partir do 4º dia útil após a realização do leilão, em até 30 (trinta) dias corridos, das 9:30 às 11:30 e das 14:30 às 17:30 de segunda e sexta-feira, mediante prévio e obrigatório agendamento. Poderá o local de retirada ser aproximado ao local de anúncio. Consulte o consultor antes da retirada.",
  },
  {
    id: 3,
    title: "/pagamento",
    body: "O preço do bem arrematado incluindo a comissão e taxa administrativa, deverão ser pagos através de depósito em dinheiro na rede bancária, DOC ou TED, no prazo de até 2 (dois) dias úteis após o encerramento do leilão, impreterivelmente. O pagamento deverá ser realizado na conta da Via Comércio de Máquinas e Equipamentos Ltda– CPJ 11.280.481/0001-52– Banco Itaú (341), Agência 6382, Conta Corrente 09975-9. Cada arrematante receberá um e-mail com as orientações para pagamento. SOLICITAMOS AGUARDAR O RECEBIMENTO DESTE E-MAIL ANTES DE EFETUAR QUAISQUER PAGAMENTOS. Após os 2 (dois) dias úteis e encerrado o Leilão (prazo final para pagamento dos lotes arrematados), caso o arrematante não tenha efetuado o pagamento, o Leiloeiro poderá usar de sua prerrogativa legal constante no item 8.2 do Contrato de Adesão as Site Usadão Máquinas. Após o recebimento do e-mail, os arrematantes deverão efetuar o pagamento e enviar o comprovante (valor arrematado + comissão + taxa administrativa) para o e-mail financeiro@usadaomaquinas.com.br, devendo constar o nome do arrematante, número dos lotes arrematados, para em até 3 (três) dias úteis após a confirmação do pagamento o recibo de venda de leilão ser enviado para o e-mail cadastrado. O recibo de venda de leilão poderá ser enviado ao arrematante via Sedex com AR, mediante o custeamento do envio no valor de R$ 40,00 (quarenta reais), o qual deverá ser efetuado através de depósito identificado junto a conta da Via Máquinas. Para envio via Sedex com AR, o arrematante/comprador deverá oficializar esta solicitação via e-mail:financeiro@usadaomaquinas.com.br.",
  },
  {
    id: 4,
    title: "/pagador",
    body: "Lorem ipsum dolor 1 ",
  },
  {
    id: 5,
    title: "/pago",
    body: "Lorem ipsum dolor sit amet, consetur. 2",
  },
];

const PresetsList = (props) => {
  const { textMessage, setTextMessage, openPresets, setOpenPresets } = props;

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState("");
  const [scrollLeft, setScrollLeft] = useState("");

  const sliderContainerRef = useRef(null);

  const onMouseDown = (e) => {
    setIsDown(true);
    sliderContainerRef.current.classList.add("active");
    setStartX(e.pageX - sliderContainerRef.current.offsetLeft);
    setScrollLeft(sliderContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
    sliderContainerRef.current.classList.remove("active");
  };

  const onMouseUp = () => {
    setIsDown(false);
    sliderContainerRef.current.classList.remove("active");
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainerRef.current.offsetLeft;
    const walk = x - startX; //scroll-fast
    sliderContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const choosePreset = (id) => {
    const regex = /\/[^ ]*[^ ]?$/;

    const replacedString = textMessage.replace(regex, "");

    const preset = presets.filter((preset) => preset.id === id);

    if (replacedString === "" || replacedString === null) {
      setTextMessage(preset[0].body);
      setOpenPresets(!openPresets);
    } else {
      setTextMessage(replacedString + " " + preset[0].body);
      setOpenPresets(!openPresets);
    }
  };

  const chooseFastMessage = (index) => {
    const regex = /\/[^ ]*[^ ]?$/;

    const replacedString = textMessage.replace(regex, "");

    if (replacedString === "" || replacedString === null) {
      setTextMessage(fastMessages[index].body);
      setOpenPresets(!openPresets);
    } else {
      setTextMessage(replacedString + " " + fastMessages[index].body);
      setOpenPresets(!openPresets);
    }
  };

  const filteredPresets =
    textMessage.length > 0
      ? presets.filter((preset) =>
          preset.title.includes(textMessage.match(/\/[^ ]*[^ ]?$/, ""))
        )
      : presets;

  return (
    <div className="presets__list">
      <div className="x-p-15 mb-10">
        <h3>Escolha um preset pré-configurado</h3>
        <p>
          Você também pode add/editar seus presets{" "}
          <Link to="/minha-conta/presets" className="preset__link">
            acessando este link
          </Link>
          .
        </p>
      </div>

      <div className="presets__body">
        {filteredPresets.map((preset, index) => {
          return (
            <Box
              key={preset.id}
              className="preset mb-10 x-p-15 y-p-10"
              onClick={() => choosePreset(preset.id, index)}
            >
              <span className="preset__title d-block text-semi-bold fs-16 mb-5">
                {preset.title}
              </span>
              <p>{preset.body}</p>
            </Box>
          );
        })}
      </div>

      <div className="presets__footer">
        <span className="presets__footer-title">Mensagens rápidas:</span>

        {/* eslint-disable-next-line */}
        <div
          className="presets__footer-items"
          ref={sliderContainerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {fastMessages.map((fastMessage, index) => {
            return (
              // eslint-disable-next-line
              <div
                key={index}
                onClick={() => chooseFastMessage(index)}
                className="presets__footer-item"
              >
                {fastMessage.body}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PresetsList;
