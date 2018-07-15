import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Message from "./Message";
import { Title1 } from "../theme/index";

const Div = styled.div`
  grid-area: m;
  box-sizing: border-box;
  padding-left: 6px;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const JoinRoom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 34px;
  font-weight: 300;
`;

class MessageList extends Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }
  render() {
    const { messages } = this.props;
    if (!this.props.roomid) {
      return (
        <Div className="message-list">
          <JoinRoom className="join-room">
            <Title1 color="#4d4d4d">&larr; Join a room!</Title1>
          </JoinRoom>
        </Div>
      );
    } else {
      return (
        <Div>
          {messages.map((message, index) => {
            return (
              <Message
                key={index}
                userid={message.senderId}
                text={message.text}
              />
            );
          })}
        </Div>
      );
    }
  }
}

export default MessageList;
