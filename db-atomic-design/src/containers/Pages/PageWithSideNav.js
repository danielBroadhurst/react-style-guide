import React from "react";
import { Route, Switch } from "react-router";
import SideNav from "../../components/organisms/SideNav/SideNav";
import MainContent from "../../components/molecules/MainContent/MainContent";
import Header from "../../components/organisms/Header/Header";
import Heading from "../../components/atoms/Heading/Heading";
import Content from "../../components/molecules/Content/Content";
import Footer from "../../components/molecules/Footer/Footer";

const navLinks = [
  {
    title: "Main Links",
    link: "/",
    children: [
      {
        title: "Footer",
        link: "/components/molecules/Footer",
      },
      {
        title: "Header",
        link: "/components/organisms/Header",
      },
      {
        title: "Side Nav",
        link: "/components/organisms/SideNav",
      },
      {
        title: "Side Nav Search",
        link: "/components/molecules/SideNavSearch",
      },
    ],
  },
  {
    title: "Next Group",
    link: "/",
    children: [
      {
        title: "Footer",
        link: "/components/molecules/Footer",
      },
      {
        title: "Header",
        link: "/components/organisms/Header",
      },
      {
        title: "Side Nav",
        link: "/components/organisms/SideNav",
      },
      {
        title: "Side Nav Search",
        link: "/components/molecules/SideNavSearch",
      },
    ],
  },
];

function PageWithSideNav() {
  return (
    <div className="App">
      <SideNav links={navLinks}></SideNav>
      <MainContent>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Heading Tag={"h1"}>Please select a topic.</Heading>
          </Route>
          <Route path="/components/:type/:id" component={Content}></Route>
        </Switch>
        <Footer></Footer>
      </MainContent>
    </div>
  );
}

export default PageWithSideNav;
