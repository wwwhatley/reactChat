import React from "react";
import styled from "styled-components";
import { Text } from "../theme/index";

const MessageBox = styled.div`
  margin: 1em 0;
`;

const MessageUser = styled.div`
  opacity: 0.9;
  margin-bottom: 0.8em;
`;

const MessageText = styled.div`
  background: #18828f;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  width: 80px;
  font-family: "Karla", sans-serif;
`;

export default function Message({ userid, text }) {
  return (
    <MessageBox>
      <MessageUser>
        <Text margin="0" color="#093338">
          {userid}
        </Text>
      </MessageUser>
      <MessageText>{text}</MessageText>
    </MessageBox>
  );
}
