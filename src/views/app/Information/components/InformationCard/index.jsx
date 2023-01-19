import React from "react";

import Card from "../../../../../components/Card";

import "./styles.css";

const InformationCard = () => {
  const data = [
    {
      id: 1,
      title: "Idade",
      value: "32 anos"
    },
    {
      id: 2,
      title: "Entrada",
      value: "12/12/2008 12:45"
    },
    {
      id: 3,
      title: "Idade",
      value: "12/12/2008 12:45"
    },
    {
      id: 4,
      title: "Idade",
      value: "Xapuri – MA"
    },
  ];

  return (
    <div className="x-p-15 y-p-15 pt-0">
      <Card>
        <table className="information__table">
          <tbody className="information__body">
            {data.map(item => {
              return (
                <tr key={item.id} className="information__row">
                  <td className="information__table-data information__table-data--align-right">{item.title}</td>
                  <td className="information__table-data">{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default InformationCard;