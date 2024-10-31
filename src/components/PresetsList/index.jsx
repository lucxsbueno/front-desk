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
    body: "Eu me chamo Lucas Bueno",
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
    body: "Os equipamentos com suas respectivas fotos e descrições poderão ser visualizados através do site, ou, ainda, pessoalmente, devendo o cliente interessado solicitar o agendamento de visita. Para agendar uma visita, o cliente deverá entrar em contato. Não serão aceitas reclamações posteriores referentes a fotos, descrições e possíveis erros nos laudos dos produtos.",
  },
  {
    id: 2,
    title: "/retirada",
    body: "Os bens poderão ser retirados, satisfeitos todos os pagamentos e procedimentos legais, a partir do 4º dia útil após a realização do , em até 30 (trinta) dias corridos, das 9:30 às 11:30 e das 14:30 às 17:30 de segunda e sexta-feira, mediante prévio e obrigatório agendamento. Poderá o local de retirada ser aproximado ao local de anúncio. Consulte o consultor antes da retirada.",
  },
  {
    id: 3,
    title: "/pagamento",
    body: "O preço do bem incluindo a comissão e taxa administrativa, deverão ser pagos através de depósito em dinheiro na rede bancária, DOC ou TED, no prazo de até 2 (dois) dias úteis após o encerramento do , impreterivelmente. O pagamento deverá ser realizado na conta.",
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
