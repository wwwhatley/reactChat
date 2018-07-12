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
  margin-right: 0.5em;
`;

const Ul = styled.ul`
  padding: 0;
`;

const StyledDiv = styled.div`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

const A = styled.a``;

export default function RoomList({ rooms, subscribetoroom, roomid }) {
  const orderedRooms = [...rooms].sort((a, b) => a.id - b.id);
  return (
    <Div>
      <Title1>Smack</Title1>
      <Ul>
        {orderedRooms.map((room, index) => {
          return (
            <StyledDiv key={index} color={roomid === room.id ? "#fff" : "#ccc"}>
              <I className="fab fa-react" />
              <Li>
                <A
                  onClick={() => {
                    subscribetoroom(room.id);
                  }}
                  href="#"
                >
                  {room.name}
                </A>
              </Li>
            </StyledDiv>
          );
        })}
      </Ul>
    </Div>
  );
}
