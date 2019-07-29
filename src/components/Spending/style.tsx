import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginWrapper: {
      backgroundSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    },
    loginLogo: {
      width: "100%"
    },
    centeringContainer: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      marginBottom: `${theme.spacing(4)}px`
    },
    textField: {
      background: `${theme.palette.common.white}`,
      border: "1px solid #c6d3e6",
      height: "36px"
    },
    textFieldInput: {
      paddingLeft: `${theme.spacing(1)}px`
    },
    textFieldFocused: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    textLabel: {
      color: `${theme.palette.common.white}`,
      marginBottom: `${theme.spacing(2)}px`,
      fontSize: `13px`
    },
    button: {
      marginTop: `${theme.spacing(4)}px`,
      color: `${theme.palette.common.white}`,
      backgroundColor: "#0ad587",
      fontSize: "13px",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#30dc9a"
      }
    },
    error: {
      padding: `${theme.spacing(1)}px`,
      marginTop: `${theme.spacing(4)}px`,
      backgroundColor: `${theme.palette.common.white}`,
      color: `${theme.palette.error.main}`,
      border: `3px solid ${theme.palette.error.main}`
    }
  })
);
