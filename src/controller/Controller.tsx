import { API } from "../lib/Api";
import { UserProps } from "../utils/user.props";

export const Controller = {
  login: (username: string, password: string) => {
    return API.signIn(username, password);
  },

  logout: () => {
    API.logout();
  },

  cadastrar: (user: UserProps) => {
    return API.signUp(user);
  },

  listar: () => {
    return API.get();
  },
  getUser: () => {
    return API.getUserLog();
  },
  transacao: () => {},

  autenticado: () => {
    return API.permissions();
  },
};
