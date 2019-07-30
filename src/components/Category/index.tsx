import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Icon } from "@material-ui/core";
import useStyles from "./categoryStyles";
import ICategoryProps from "./ICategoryProps";
import { Divider } from "@material-ui/core";

const Category: FC<ICategoryProps> = ({ title, body, handleClick }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4" className={classes.title}>
          {title}
        </Typography>
        <Divider />
        <div className={classes.content}>
          {body.map(item => (
            <div
              className={classes.contentItem}
              onClick={e => handleClick(e, item.id)}
              key={item.id}
            >
              <Typography variant="subtitle1">{item.title}</Typography>
              <Icon>{item.icon}</Icon>
              <Typography>{item.amount} ₽</Typography>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Category;
