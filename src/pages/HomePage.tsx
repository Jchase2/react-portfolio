import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import background from "../assets/background.jpg";
import Navbar from "../components/Header/Navbar";
import AboutMe from "../components/AboutSection/AboutMe";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Segment
        text
        fluid
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          margin: 0,
        }}
      >
        <Container
          text
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "85%",
            flexDirection: "column",
          }}
        >
          <Header as="h1" content="James D Chase II" />
          <Header as="h2" content="Portfolio / Personal Site" />
        </Container>
      </Segment>
      <AboutMe />
    </>
  );
};

export default HomePage;
