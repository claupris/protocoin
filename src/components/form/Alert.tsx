import { Alert } from "@mui/material";

export function AlertMenssage(tipo: string, value: string) {
  switch (tipo) {
    case "error":
      return (
        <Alert variant="filled" severity="error">
          {value}
        </Alert>
      );
    case "succes":
      return (
        <Alert variant="filled" severity="success">
          {value}
        </Alert>
      );
    case "info":
      return (
        <Alert variant="filled" severity="info">
          {value}
        </Alert>
      );
    case "warning":
      return (
        <Alert variant="filled" severity="warning">
          {value}
        </Alert>
      );
    default:
      break;
  }
}
