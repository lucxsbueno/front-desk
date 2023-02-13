import React from "react";

import Table from "../../../../components/Table";
import Checkbox from "../../../../components/Forms/Checkbox";
import TableRow from "../../../../components/Table/TableRow";
import TableHead from "../../../../components/Table/TableHead";
import TableData from "../../../../components/Table/TableData";

import mock from "../mock";
import { Link } from "react-router-dom";

const CustomersTable = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead className="th-checkbox">
            <Checkbox />
          </TableHead>
          <TableHead>Nome completo</TableHead>
          <TableHead>Útimo login no usadão</TableHead>
          <TableHead>Situação</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Atendimento</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {mock.map((customer) => {
          return (
            <TableRow key={customer.id}>
              <TableData>
                <Checkbox />
              </TableData>
              <TableData>
                <Link
                  to={`/clientes/${customer.id}`}
                  state={{ data: customer }}
                  className="clear-link"
                >
                  {customer.title}
                </Link>
              </TableData>
              <TableData>{customer.date}</TableData>
              <TableData>{customer.situation}</TableData>
              <TableData>{customer.status}</TableData>
              <TableData>{customer.attendance}</TableData>
              <TableData />
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomersTable;
