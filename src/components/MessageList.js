import React, { Component } from "react";
import ReactDOM from "react-dom";
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

export default MessageList;
