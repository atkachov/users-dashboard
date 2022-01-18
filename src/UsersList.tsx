import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import { DashboardUser } from './types/DashboardUser';
import { store } from './state/store';
import { User } from './User';

const mapUser = (rawUser: any) => {
  const dashboardUser: DashboardUser = {
    id: rawUser.id,
    name: rawUser.name,
    username: rawUser.username,
    email: rawUser.email,
    city: rawUser.address.city,
  };
  return dashboardUser;
};

export const UsersList: FC = (props) => {
  return (
    <Table borderless hover>
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>City</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {store.map((rawUser) => (<User user={mapUser(rawUser)}/>))}
      </tbody>
    </Table>
  );
};