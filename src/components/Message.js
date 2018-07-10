import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`
  margin: 1em 0;
`;

const MessageUser = styled.div`
  font-size: 11px;
  color: #2ecbd1;
  opacity: 0.9;
  margin-bottom: 6px;
`;

const MessageText = styled.div`
  background: #2ecbd1;
  color: #fff;
  display: inline;
  padding: 4px 8px;
  border-radius: 8px;
`;

export default function Message({ userid, text }) {
  return (
    <MessageBox>
      <MessageUser>{userid}</MessageUser>
      <MessageText>{text}</MessageText>
    </MessageBox>
  );
}
