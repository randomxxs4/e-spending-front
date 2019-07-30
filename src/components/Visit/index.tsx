import React from "react";
import Category from "../Category";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import CategoryType from "../../domain/models/Category";

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

const mockData: Array<CategoryType> = [
  {
    title: "Income",
    content: [
      { id: 1, icon: "add_circle_outline", title: "Add money", amount: 333 }
    ]
  },
  {
    title: "Money",
    content: [
      { id: 2, icon: "account_balance", title: "Bank balance", amount: 13200 },
      { id: 3, icon: "account_balance_wallet ", title: "Wallet", amount: 1000 }
    ]
  },
  {
    title: "Money",
    content: [
      { id: 4, icon: "account_balance", title: "Bank balance", amount: 13200 },
      { id: 5, icon: "account_balance_wallet ", title: "Wallet", amount: 1000 },
      { id: 6, icon: "account_balance_wallet ", title: "Wallet", amount: 1000 },
      { id: 7, icon: "account_balance_wallet ", title: "Wallet", amount: 1000 }
    ]
  }
];

const Visitor: React.FC = () => {
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent, elementId: number) => {
    console.log(`clicked! id = ${elementId}`);
  };
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} cols={3}>
        {mockData.map(item => (
          <GridListTile key={item.title} cols={3}>
            <Category
              title={item.title}
              body={item.content}
              handleClick={handleClick}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Visitor;
