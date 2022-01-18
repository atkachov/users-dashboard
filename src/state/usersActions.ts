import { ActionType, DashboardUser } from '../types';

export interface AddUserAction {
  action: ActionType.ADD_USER;
  payload?: DashboardUser;
}

export interface DeleteUserAction {
  action: ActionType.REMOVE_USER;
  payload?: DashboardUser;
}

export interface EditUserAction {
  action: ActionType.UPDATE_USER;
  payload?: DashboardUser;
}

export type UsersActions = AddUserAction | DeleteUserAction | EditUserAction;

