import React from "react";
import styled from "styled-components";
import Message from "./Message";

const Div = styled.div`
  grid-area: m;
  box-sizing: border-box;
  padding-left: 6px;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export default function MessageList({ messages }) {
  return (
    <Div>
      {messages.map((message, index) => {
        return (
          <Message key={index} userid={message.senderId} text={message.text} />
        );
      })}
    </Div>
  );
}
