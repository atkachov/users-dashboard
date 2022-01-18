import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { DashboardUser } from './types';

interface UserProps {
  user: DashboardUser;
}

export const User: FC<UserProps> = ({user}) => {
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.city}</td>
      <td><Button variant="warning">edit</Button></td>
      <td><Button variant="danger">delete</Button></td>
    </tr>
  );
};