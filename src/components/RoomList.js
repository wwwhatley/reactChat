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

class RoomList extends React.Component {
  render() {
    return (
      <Div>
        <div>RoomList</div>
      </Div>
    );
  }
}

export default RoomList;
