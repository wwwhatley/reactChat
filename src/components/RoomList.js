import React from "react";
import styled from "styled-components";
import { Title1, Li } from "../theme/index";

const Div = styled.div`
  grid-area: r;
  box-sizing: border-box;
  padding: 10px;
  background-color: #18828f;
  overflow: scroll;
  height: 100%;
`;

const I = styled.i`
  font-size: 1.6em;
  color: #fff;
  margin-right: 0.5em;
`;

export default function RoomList({ rooms }) {
  return (
    <Div>
      <Title1>React Chat</Title1>
      <ul>
        {rooms.map((room, index) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: ".5em 0"
              }}
            >
              <I className="fab fa-react" />
              <Li key={index}>{room.name}</Li>
            </div>
          );
        })}
      </ul>
    </Div>
  );
}
