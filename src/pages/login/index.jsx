import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

export function Login() {
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit() {
    const data = {
      username,
      password,
    };
    const ok = await signIn(data);

    if (ok) {
      navigate("/home");
    } else {
      alert("Email ou senha inválida");
    }
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src="/logoipsumsm.png" alt="Logotipo" />
      <form className={styles.form} autoComplete="off">
        <h1>Efetuar login</h1>
        <TextField
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          label="Login"
          type="text"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Senha"
          type="password"
          variant="outlined"
        />
        <Button variant="contained" size="large" onClick={onSubmit}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
