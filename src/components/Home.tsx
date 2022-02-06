import React, { FC, useEffect, useState } from "react";

import styled from "@emotion/styled";
import { searchByName } from "../api/jinkan";
import { IJinkanData, ITest } from "../api/jinkan/types";

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
  const [data, setData] = useState<any>();
  const x = props.x;
  const y = props.y;

  const test = async () => {
    try {
      const anime = await searchByName("one piece");
      setData(anime.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <Container>
      <div>Hello</div>
      <div>
        <button onClick={test}>test</button>
        {data &&
          data.map((data: any) => (
            <div key={data.mal_id}>
              <div>{data.title}</div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Home;
