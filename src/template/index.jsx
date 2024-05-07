import { Button, Avatar, Tooltip } from "@mui/material";
import { Link, Navigate, Outlet } from "react-router-dom";
import { Home, LogOut, NotepadText } from "lucide-react";

import styles from "./style.module.css";
import { useAuth } from "../context/auth-context";

export function Template() {
  const { user, signOut } = useAuth();
  const isUserLogged = !!user;
  return isUserLogged ? (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/home">
            <img className={styles.image} src="/logoipsum.png" alt="Logotipo" />
          </Link>

          <div className={styles.contentCenter}>
            <Tooltip title="Home">
              <Link to="/home">
                <Avatar sx={{ bgcolor: "#1565C0" }}>
                  <Home />
                </Avatar>
              </Link>
            </Tooltip>
            <Tooltip title="Sobre">
              <Link to="/home/about">
                <Avatar sx={{ bgcolor: "#1565C0" }}>
                  <NotepadText />
                </Avatar>
              </Link>
            </Tooltip>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.containerAvatar}>
              <Link to="/home/about">
                <Avatar src="https://github.com/helomt.png" variant="rounded" />
              </Link>
              <span>Heloisa Tavares</span>
              <Button onClick={signOut}>
                <LogOut size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
}
