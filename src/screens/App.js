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
      joinedRooms: [],
      roomId: null
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "wwwhatley",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.getRooms();
      })
      .catch(err => console.log("error on connecting: ", err));
  }

  getRooms() {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        });
      })
      .catch(err => console.log("error on joinableRooms: ", err));
  }

  subscribeToRoom(roomId) {
    this.setState({ messages: [] });
    this.currentUser
      .subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      })
      .then(room => {
        this.setState({
          roomId: room.id
        });
        this.getRooms();
      })
      .catch(err => console.log("error on subscribing to room: ", err));
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  }

  render() {
    return (
      <Wrapper>
        <RoomList
          roomid={this.state.roomId}
          subscribetoroom={this.subscribeToRoom}
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
