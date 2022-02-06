import React, { FC } from "react";

import styled from "@emotion/styled";

// adding a ? makes variable optional in an interface
interface HomeProps {
  x?: string;
  y?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: FC<HomeProps> = (props) => {
  const x = props.x;
  const y = props.y;

  return (
    <Container>
      <div>Hello</div>
    </Container>
  );
};

export default Home;
