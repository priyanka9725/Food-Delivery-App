import React from "react";
import background from "../Assets/De.png";
import styled from "styled-components";

export default function Background() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
    filter: brightness(20%);
  }
`;
