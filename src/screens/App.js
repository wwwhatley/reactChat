import React, { Component } from "react";
import styled from "styled-components";
import Chatkit from "@pusher/chatkit";
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
        roomId: 9434230,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <h1>Hi</h1>
      </Wrapper>
    );
  }
}

export default App;
