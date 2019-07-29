import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bg from "../../assets/images/bg.png";
const drawerWidth: number = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    },
    content: {
      height: "83vh",
      padding: theme.spacing(3),
      background: `url(${bg})`
    }
  })
);
