import React, { Component } from "react";
import styled from "styled-components";
import Chatkit from "@pusher/chatkit";
import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";
import RoomList from "../components/RoomList";
import NewRoomForm from "../components/NewRoomForm";
import { Wrapper } from "../theme/index.js";
import { tokenUrl, instanceLocator } from "../config.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.createRoom = this.createRoom.bind(this);
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
      this.currentUser = currentUser;
      currentUser
        .getJoinableRooms()
        .then(joinableRooms => {
          this.setState({
            joinableRooms,
            joinedRooms: this.currentUser.rooms
          });
        })
        .catch(err => {
          console.log(err);
        });

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

  createRoom(name) {
    this.currentUser.createRoom({
      name,
      creatorId: "wwwhatley"
    });
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: 11291549
    });
  }

  render() {
    return (
      <Wrapper>
        <RoomList
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
        />
        <MessageList messages={this.state.messages} />
        <NewRoomForm createroom={this.createRoom} />
        <SendMessageForm sendmessage={this.sendMessage} />
      </Wrapper>
    );
  }
}

export default App;
