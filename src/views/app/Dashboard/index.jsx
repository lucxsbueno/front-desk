import React from "react";

import Box from "../../../components/Box";
import Table from "../../../components/Table";
import Card from "../../../components/Dashboard/Card";
import Spline from "../../../components/Charts/Spline";
import TableRow from "../../../components/Table/TableRow";
import TableHead from "../../../components/Table/TableHead";
import TableData from "../../../components/Table/TableData";
import CardGrid from "../../../components/Dashboard/CardGrid";
import ApexPieChart from "../../../components/Charts/ApexPieChart";
import StackedColumn from "../../../components/Charts/StackedColumn";

import { AlertOctagon, MessageCircle, MessageSquare } from "lucide-react";

import "./styles.css";

const Dashboard = () => {
  return (
    <div className="h-100 d-flex flex-column">
      <div className="w-100 dashboard">
        <div className="container mb-10">
          <div className="row">
            <div className="col-md-12 mb-20 pt-15">
              <h2 className="mb-5 mt-30 dashboard__title">
                Olá, <span>Lucas Bueno</span>!
              </h2>
              <p className="mb-20 dashboard__subtitle">
                Fique por dentro dos principais indicadores do gvmdesk.
              </p>

              <Card
                icon={<AlertOctagon />}
                title="$2.456,0"
                subtitle="Lorem ipsum dolor"
                color="primary"
              />

              <CardGrid>
                <Card
                  icon={<AlertOctagon />}
                  title="45%"
                  subtitle="Lorem ipsum dolor"
                />

                <Card
                  icon={<MessageCircle />}
                  title="$2.456,0"
                  subtitle="Lorem ipsum dolor"
                  iconColor="blue"
                />
                <Card
                  icon={<MessageSquare />}
                  title="$2.456,0"
                  subtitle="Lorem ipsum dolor"
                  iconColor="purple"
                />
              </CardGrid>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Table>
                <thead>
                  <TableRow>
                    <TableHead>Posição</TableHead>
                    <TableHead>Nome completo</TableHead>
                    <TableHead>Útimo login no usadão</TableHead>
                    <TableHead>Situação</TableHead>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableData>1º</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>2º</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>3º</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>3º</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>3º</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                    <TableData>Teste</TableData>
                  </TableRow>
                </tbody>
              </Table>
            </div>
            <div className="col-md-4">
              <ApexPieChart />
            </div>
          </div>
        </div>

        <div className="container mt-30 mb-20">
          <div className="row">
            <div className="col-md-6">
              <Box>
                <StackedColumn />
              </Box>
            </div>
            <div className="col-md-6">
              <Box className="pr-10 pt-10">
                <Spline />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
