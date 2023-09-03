export type TransactionType = {
  wasSent: boolean;
  target: string;
  coinName: string;
  value: number;
  date: string;
};

export type UserProps = {
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  transactions: TransactionType[];
};
