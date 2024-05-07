import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { CircleChevronLeft } from "lucide-react";

import styles from "./style.module.css";
import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <Link to={-1}>
        <CircleChevronLeft size={16} /> Voltar
      </Link>
      <div className={styles.container}>
        <Grid container spacing={4} maxWidth={"1120px"} marginTop={6}>
          <Grid item md={4}>
            <Avatar
              src="https://github.com/helomt.png"
              variant="rounded"
              sx={{ width: 239, height: 239 }}
            />
          </Grid>
          <Grid item md={8}>
            <Card elevation={0}>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  alignItems="start"
                  justifyContent="space-between"
                  marginBottom={1.5}
                  gap={5}
                >
                  <Typography variant="h4">Heloisa Tavares</Typography>

                  <Box
                    display="flex"
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={16}
                  >
                    <Tooltip title="Github">
                      <Link to={"https://github.com/helomt"}>
                        <Avatar
                          src="/github.png"
                          variant="square"
                          sx={{ width: 100, height: 100 }}
                        ></Avatar>
                      </Link>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                      <Link to={"https://www.linkedin.com/in/heloisamtavares/"}>
                        <Avatar
                          src="/linkedin.png"
                          variant="square"
                          sx={{ width: 100, height: 100 }}
                        ></Avatar>
                      </Link>
                    </Tooltip>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box display="flex" alignItems="center" gap={2} width="100%" mt={8}>
          <Typography>Desenvolvido por HMT</Typography>
        </Box>
      </div>
    </>
  );
}
