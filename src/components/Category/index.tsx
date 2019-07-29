import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "./categoryStyles";
import ICategoryProps from "./ICategoryProps";

const Category: FC<ICategoryProps> = ({ title, body, icon }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h4">
          {icon !== undefined ? icon : null}
          {title}
        </Typography>
        {body}
      </Paper>
    </div>
  );
};

export default Category;
