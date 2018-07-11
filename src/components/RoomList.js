import React from "react";
import styled from "styled-components";

const Div = styled.div`
  grid-area: r;
  box-sizing: border-box;
  padding: 10px;
  background-color: #2ecbd1;
  overflow: scroll;
  height: 100%;
`;

export default function RoomList({ rooms }) {
  return (
    <Div>
      <h1>Room List</h1>
      <ul>
        {rooms.map((room, index) => {
          return <li key={index}>{room.name}</li>;
        })}
      </ul>
    </Div>
  );
}
