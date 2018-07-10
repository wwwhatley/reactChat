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
  background: var(--secondary-color);
`;

const dummy = [
  {
    userId: "wwwhatley",
    text: "Hi"
  },
  {
    userId: "wwwhatley",
    text: "Hello"
  },
  {
    userId: "wwwhatley",
    text: "LFjasdlkfjasdlkfjasdlkfjasdlkfjasflkjasdflkasdjfsadlkfj"
  }
];

export default function MessageList() {
  return (
    <Div>
      {dummy.map((message, index) => {
        return (
          <Message key={index} userid={message.userId} text={message.text} />
        );
      })}
    </Div>
  );
}
