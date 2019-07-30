import React, { FC } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import useStyles from "./bottomNavigationStyle";

const LabelBottomNavigation: FC = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState<string>("home");

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<Icon>home</Icon>}
      />
      <BottomNavigationAction
        label="Expenses"
        value="expenses"
        icon={<Icon>money_off</Icon>}
      />
      <BottomNavigationAction
        label="Log"
        value="log"
        icon={<Icon>cloud_queue</Icon>}
      />
      <BottomNavigationAction
        label="Statistics"
        value="Statistics"
        icon={<Icon>insert_chart_outlined</Icon>}
      />
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
