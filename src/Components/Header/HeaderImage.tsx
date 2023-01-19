import React from "react";
import { Container, Image } from "semantic-ui-react";
import background from "../../assets/background.jpg";

const HeaderImage = () => {
  return (
    <Container>
      <Image src={background} fluid />
    </Container>
  );
};

export default HeaderImage;
