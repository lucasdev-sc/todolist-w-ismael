import React, { useEffect, useState } from "react";

import { Container } from "./styles";

interface Props {}

const Background: React.FC<Props> = (props) => {
  const id = document.getElementById("component");

  return (
    <Container id="component">
      {props.children}
    </Container>
  );
};

export default Background;
