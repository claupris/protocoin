import { UserProps, TransactionType } from "./../utils/user.props";
import Storage from "../utils/Storage";

export type signUpResp = null | "email" | "username" | true | "both" | "existente";
export type authResp = string | null | undefined;
export type getResp = null;

export const API = {
  isAuthenticated: false,
  addTransaction: (username: string, transaction: TransactionType): true | null => {
    const table: UserProps[] = JSON.parse(Storage.getUser("users") || "[]");
    if (table.length === 0) return null;

    const resp = table.find((element) => {
      if (element.username === username) {
        element.transactions.push(transaction);
        return true;
      }
    });

    if (resp !== undefined) {
      Storage.setUser("users", JSON.stringify(table));
      return true;
    } else return null;
  },
  get: (): UserProps[] | null => {
    try {
      const table: UserProps[] = JSON.parse(Storage.getUser("users") || "[]");
      if (table.length === 0) return null;
      else return table;
    } catch (error) {
      return null;
    }
  },
  signUp: (user: UserProps) => {
    try {
      const table = JSON.parse(Storage.getUser("users") || "[]");

      if (table.length === 0) {
        table.push(user);
        Storage.setUser("users", table);
      } else {
        const testIfUserIsRepeated = table.find(
          (element: { username: string | undefined }) => element.username === user.username
        );
        const testIfEmailIsRepeated = table.find(
          (element: { email: string | undefined }) => element.email === user.email
        );

        if (testIfUserIsRepeated && testIfEmailIsRepeated)
          return "login e email informado já existe!";
        if (testIfUserIsRepeated) return "login informado já existe!";
        if (testIfEmailIsRepeated) return "email informado já existe!";

        table.push(user);
        Storage.setUser("users", table);
      }
      return true;
    } catch (error) {
      return error;
    }
  },
  signIn: (key: string, password: string) => {
    const table = JSON.parse(Storage.getUser("users") || "[]");
    if (table.length === 0) return false;
    let user = null;
    let login = null;

    login = table.find((element: { username: string; password: string }) => {
      if (element.username === key && element.password === password) {
        user = element;
      }
      return element.username === key && element.password === password;
    });

    if (login) {
      Storage.setUser("userLogado", user);
      return user;
    }

    return false;
  },
  log(callback: VoidFunction) {
    API.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  logOut(callback: VoidFunction) {
    API.isAuthenticated = false;
    setTimeout(callback, 100);
  },

  logout: () => {
    Storage.removeUser("userLogado");
  },

  getUserLog: () => {
    return JSON.parse(Storage.getUser("userLogado") || "[]");
  },

  permissions: () => {
    return Storage.getUser("userLogado") ? true : false;
  },
};
