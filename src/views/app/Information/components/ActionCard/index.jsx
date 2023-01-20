import React from "react";

import Card from "../../../../../components/Card";
import Switch from "../../../../../components/Switch";

import "./styles.css";

const ActionCard = () => {
  return (
    <div className="x-p-15 y-p-15 pt-0">
      <Card>
        <table className="information__table">
          <tbody className="information__body">
            <tr className="information__row">
              <td className="information__table-data">Status</td>
              <td className="information__table-data information__table-data--align-right">
                <Switch />
              </td>
            </tr>
            <tr className="information__row">
              <td className="information__table-data">Aprovado</td>
              <td className="information__table-data information__table-data--align-right">
                <Switch />
              </td>
            </tr>
            <tr className="information__row">
              <td className="information__table-data">Importante</td>
              <td className="information__table-data information__table-data--align-right">
                <Switch />
              </td>
            </tr>
            <tr className="information__row">
              <td className="information__table-data">Inadimplente</td>
              <td className="information__table-data information__table-data--align-right">
                <Switch />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ActionCard;
