import React, { useState } from "react";
import {
  InputLabel,
  InputBase,
  Grid,
  Button,
  Box,
  Typography
} from "@material-ui/core";
import { useStyles } from "./style";
import FullDialog from "../FullScreenDialog";

const Spending: React.FC = () => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <>
      <Grid container className={classes.loginWrapper}>
        <Grid container className={classes.centeringContainer}>
          <Grid item xs={8}>
            <Grid container className={classes.centeringContainer}>
              <Grid container className={classes.centeringContainer}>
                <Grid item xs={12}>
                  <Grid container className={classes.centeringContainer}>
                    <Grid item xs={6} sm={3}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <FullDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        title={"Add some value"}
      />
    </>
  );
};
export default Spending;
