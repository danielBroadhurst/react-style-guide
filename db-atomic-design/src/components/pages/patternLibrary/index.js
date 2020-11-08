import React from "react";
import { Route, Switch } from "react-router";
import SideNav from "../../organisms/sideNav";
import Container from "../../atoms/container";
import Header from "../../organisms/header";
import Heading from "../../atoms/heading";
import Content from "../../molecules/content";
import Footer from "../../molecules/footer";

const navLinks = [
  {
    title: "Main Links",
    link: "/",
    children: [
      {
        title: "Footer",
        link: "/components/molecules/footer",
      },
      {
        title: "Header",
        link: "/components/organisms/header",
      },
      {
        title: "Side Nav Bar",
        link: "/components/organisms/sideNav",
      },
      {
        title: "Navigation Search",
        link: "/components/molecules/navSearch",
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

function PatternLibrary() {
  return (
    <div className="flexWrap">
      <SideNav links={navLinks}></SideNav>
      <Container>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Heading Tag={"h1"}>Please select a topic.</Heading>
          </Route>
          <Route path="/components/:type/:id" component={Content}></Route>
        </Switch>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default PatternLibrary;