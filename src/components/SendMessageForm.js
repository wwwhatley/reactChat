import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  grid-area: f;
  height: 100%;
  width: 100%;
  background-color: #ddd;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  min-width: 400px;
  padding: 15px 10px;
  margin: 0;
  border-style: none;
  background: #ddd;
  font-weight: 200;
  font-family: "Karla", sans-serif;
  &:focus {
    outline: none;
  }
`;

class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState(() => {
      return {
        val: value
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.sendmessage(this.state.val);
    this.setState(() => {
      return {
        val: ""
      };
    });
  }

  render() {
    return (
      <Div>
        <form onSubmit={this.onSubmit}>
          <Input
            onChange={this.handleChange}
            type="text"
            value={this.state.val}
            placeholder="Type a message and click ENTER..."
          />
        </form>
      </Div>
    );
  }
}

export default SendMessageForm;
