import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
      justifyContent: "center"
    }
  })
);

export default useStyles;
