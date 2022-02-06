import React, { FC, useEffect, useState } from "react";

import styled from "@emotion/styled";
import { searchByName } from "../api/jinkan";
import { IJinkanData } from "../api/jinkan/types";

// adding a ? makes variable optional in an interface
interface HomeProps {
  x?: string;
  y?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  border: solid;
  height: 200px;
  width: 200px;
  flex-direction: column;
  margin-top: 1em;
  &:hover {
    background-color: gray;
  }
`;

const CardContent = styled.div`
  border: solid;
`;

const CardImg = styled.div`
  display: flex;
  /* border: solid blue; */
  justify-content: center;
  align-items: center;
`;

const Home: FC<HomeProps> = (props) => {
  const [data, setData] = useState<IJinkanData[]>();
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
          data.map((data: IJinkanData) => (
            <Card key={data.mal_id}>
              <CardContent>{data.title}</CardContent>
              <CardContent>{data.score}</CardContent>
              <CardImg>
                <img
                  src={data.images.jpg.image_url}
                  alt={data.title}
                  height="100px"
                ></img>
              </CardImg>
            </Card>
          ))}
      </div>
      <CardContent>hello</CardContent>
    </Container>
  );
};

export default Home;
