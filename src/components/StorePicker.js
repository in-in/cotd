import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-style: italic;
`;

export default class StorePicker extends Component {
  render() {
    return (
      <form className="store__picker">
        <Title>Please Enter A Store</Title>
        <input
          type="text"
          required
          placeholder="Store Name"
          className="store__input"
        />
        <button type="submit" className="store__submit">
          Visit Store →
        </button>
      </form>
    );
  }
}
