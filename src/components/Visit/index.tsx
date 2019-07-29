import React from "react";
import Category from "../Category";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Typography, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  })
);

const Visitor: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} cols={3}>
        {["ssss", "bbbbb", "ggggg"].map(item => (
          <GridListTile key={item} cols={3}>
            <Category title={item} icon={<Icon>home</Icon>} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Visitor;
