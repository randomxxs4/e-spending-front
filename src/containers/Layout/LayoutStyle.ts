import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bg from "../../assets/images/bg.png";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      height: "85vh",
      padding: theme.spacing(3),
      background: `url(${bg})`,
      flexGrow: 2
    }
  })
);
