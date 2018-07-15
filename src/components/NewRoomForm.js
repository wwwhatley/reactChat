import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  grid-area: n;
  padding: 0 5px;
  background: #fff;
  color: #4d4d4d;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 135px;
  background: #fff;
  border: 0;
  outline: none;
  font-weight: 200;
  font-family: "Karla", sans-serif;
`;

const Button = styled.button`
  background: #fff;
  color: #4d4d4d;
  border: 0;
  outline: none;
`;

class NewRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState(() => {
      return {
        val: value
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createroom(this.state.val);
    this.setState(() => {
      return {
        val: ""
      };
    });
  }

  render() {
    return (
      <Div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            type="text"
            value={this.state.val}
            placeholder="Create a room"
            required
          />
          <Button type="submit">+</Button>
        </Form>
      </Div>
    );
  }
}

export default NewRoomForm;
