import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      minWidth: "400px"
    },
    title: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center"
    },
    content: {
      display: "flex",
      alignContent: "center",
      flexDirection: "row",
      justifyContent: "space-around"
    },
    contentItem: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }
  })
);

export default useStyles;
