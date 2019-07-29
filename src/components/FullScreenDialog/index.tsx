import React, { forwardRef, FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { TextField, Grid } from "@material-ui/core";
import * as useGridStyles from "../Spending/style";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  })
);

const Transition = forwardRef<unknown, TransitionProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  title: string;
  open: boolean;
  handleClose(): void;
}

const FullDialog: FC<IProps> = ({ title, open, handleClose }) => {
  const dialogStyles = useStyles();
  const gridStyles = useGridStyles.useStyles();
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={dialogStyles.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={dialogStyles.title}>
              {title}
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Grid container className={gridStyles.loginWrapper}>
            <Grid container className={gridStyles.centeringContainer}>
              <Grid item xs={8}>
                <Grid container className={gridStyles.centeringContainer}>
                  <Grid container className={gridStyles.centeringContainer}>
                    <Grid item xs={12}>
                      <Grid container className={gridStyles.centeringContainer}>
                        <Grid item xs={6} sm={3}>
                          <Grid item>
                            <TextField fullWidth />
                          </Grid>
                          <Grid item>
                            <Button
                              size="small"
                              variant="contained"
                              color="secondary"
                            >
                              Delete
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </List>
      </Dialog>
    </>
  );
};

export default FullDialog;
