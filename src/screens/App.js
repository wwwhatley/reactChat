import React, { Component } from "react";
import styled from "styled-components";
import Chatkit from "@pusher/chatkit";
import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";
import RoomList from "../components/RoomList";
import { Wrapper } from "../theme/index.js";
import { tokenUrl, instanceLocator } from "../config.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "wwwhatley",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      console.log(currentUser);

      currentUser.subscribeToRoom({
        roomId: 11291549,
        hooks: {
          onNewMessage: message => {
            this.setState(() => {
              return {
                messages: [...this.state.messages, message]
              };
            });
          }
        }
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </Wrapper>
    );
  }
}

export default App;
