import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { DashboardUser } from './types/DashboardUser';
import { UsersList } from './UsersList';



export const App: FC = () => {

  return (
    <Container>
      <Row>
        <Col>Dashboard</Col>
      </Row>
      <Row>
        <UsersList/>

      </Row>
    </Container>
  );
};