import React from "react";
import Navigation from "../../components/BottomNavigation";
import { ILayout } from "./ILayout";
import { useStyles } from "./layoutStyle";

const Layout: React.FC<ILayout> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>{children}</main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};

export default Layout;
