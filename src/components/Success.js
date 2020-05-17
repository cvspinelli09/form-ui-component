import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";


export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You Visitor</h1>
          <p>Cristian is a good man, you can count on him!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
