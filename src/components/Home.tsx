interface HomeProps {
  x?: string;
  y?: string;
}

import React, { FC } from "react";

const Home: FC<HomeProps> = (props) => {
  const x = props.x;
  const y = props.y;

  return <div></div>;
};

export default Home;
