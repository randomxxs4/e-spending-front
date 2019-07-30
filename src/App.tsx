import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Visitor from "./components/Visit";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: green.A400
    },
    secondary: {
      main: red.A700
    }
  },
  spacing: 6.5,
  shape: {
    borderRadius: 2
  }
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Layout title="TITLE">
        <Switch>
          <Route path="/" component={Visitor} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
