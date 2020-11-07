import React from "react";
import Content from "../../../components/Content/Content";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Sidenav from "../../../components/SideNav/SideNav";
import "./PageWithSideNav.css";

import { Route, Switch } from "react-router";

function PageWithSideNav() {
  return (
    <div className="App">
      <Sidenav></Sidenav>
      <MainContent>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <h3>Please select a topic.</h3>
          </Route>
          <Route path="/components/:id" component={Content}></Route>
        </Switch>
        <Footer></Footer>
      </MainContent>
    </div>
  );
}

export default PageWithSideNav;
