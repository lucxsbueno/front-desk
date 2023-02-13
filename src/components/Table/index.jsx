import React from "react";

import "./styles.css";

const Table = ({ children }) => {
  return (
    <table className="table">
      {children}
      {/* <tr>
        <th className="th-checkbox">
          <Checkbox />
        </th>
        <th>Nome completo</th>
        <th>Útimo login no usadão</th>
        <th>Situação</th>
        <th>Status</th>
        <th>Atendimento</th>
        <th>Ações</th>
      </tr>
      <tr>
        <td>
          <Checkbox />
        </td>
        <td>Bernardo Yago Lopes</td>
        <td>12 fev de 2023, às 14:56</td>
        <td>Aprovado</td>
        <td>Ativo</td>
        <td>Bloqueado</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Checkbox />
        </td>
        <td>Isaac Cauê Tomás Ferreira</td>
        <td>12 fev de 2023, às 14:56</td>
        <td>Aprovado</td>
        <td>Ativo</td>
        <td>Em atendimento</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Checkbox />
        </td>
        <td>Rodrigo Roberto da Conceição</td>
        <td>11 fev de 2023, às 14:56</td>
        <td>Aprovado</td>
        <td>Ativo</td>
        <td>Livre</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Checkbox />
        </td>
        <td>Mateus Lucca Porto</td>
        <td>4 fev de 2023, às 14:56</td>
        <td>Aprovado</td>
        <td>Ativo</td>
        <td>Em atendimento</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Checkbox />
        </td>
        <td>Carolina Brenda da Rosa</td>
        <td>10 fev de 2023, às 14:56</td>
        <td>Aprovado</td>
        <td>Ativo</td>
        <td>Em atendimento</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Checkbox />
        </td>
        <td>Eduardo Julio Gomes</td>
        <td>20 fev de 2023, às 14:56</td>
        <td>Aprovado</td>
        <td>Ativo</td>
        <td>Livre</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Checkbox />
        </td>
        <td>Paulo Vicente Freitas</td>
        <td>24 fev de 2023, às 14:56</td>
        <td>Aprovado</td>
        <td>Ativo</td>
        <td>Bloqueado</td>
        <td></td>
      </tr> */}
    </table>
  );
};

export default Table;
