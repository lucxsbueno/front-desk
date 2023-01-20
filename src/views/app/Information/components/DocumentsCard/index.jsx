import React from "react";

import Card from "../../../../../components/Card";
import ImageSvg from "../../../../../utils/icons/image.svg";
import PdfSvg from "../../../../../utils/icons/pdf.svg";

import "./styles.css";

const DocumentsCard = () => {
  return (
    <div className="x-p-15 y-p-15 pt-0">
      <Card>
        <table className="docs__table">
          <tbody className="docs__body">
            <tr className="docs__row">
              <td className="docs__table-data">
                <div className="d-flex flex-row align-items-center">
                  <div className="doc__item d-flex flex-row align-items-center">
                    <div className="doc__bg">
                      <img className="doc__icon" src={ImageSvg} alt="" />
                    </div>
                    <div className="d-flex flex-column">
                      <span className="doc__title">Identidade</span>
                      <div className="d-flex flex-row">
                        <span className="doc__size">100KB</span>
                        <span className="doc__type">IMG</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="docs__row">
              <td className="docs__table-data">
                <div className="d-flex flex-row align-items-center">
                  <div className="doc__item d-flex flex-row align-items-center">
                    <div className="doc__bg">
                      <img className="doc__icon" src={PdfSvg} alt="" />
                    </div>
                    <div className="d-flex flex-column">
                      <span className="doc__title">Comprovante</span>
                      <div className="d-flex flex-row">
                        <span className="doc__size">100KB</span>
                        <span className="doc__type">PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="docs__row">
              <td className="docs__table-data">
                <div className="d-flex flex-row align-items-center">
                  <div className="doc__item d-flex flex-row align-items-center">
                    <div className="doc__bg">
                      <img className="doc__icon" src={PdfSvg} alt="" />
                    </div>
                    <div className="d-flex flex-column">
                      <span className="doc__title">Documentação</span>
                      <div className="d-flex flex-row">
                        <span className="doc__size">100KB</span>
                        <span className="doc__type">PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default DocumentsCard;
