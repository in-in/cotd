import React from 'react';
import styled from 'styled-components';
import { getFunName } from '../helpers';

const Title = styled.h2`
  font-style: italic;
`;

const StorePicker = () => (
  <form className='store__picker'>
    <Title>Please Enter A Store</Title>
    <input
      type='text'
      required
      placeholder='Store Name'
      className='store__input'
      defaultValue={getFunName()}
    />
    <button type='submit' className='store__submit'>
      Visit Store →
    </button>
  </form>
);

export default StorePicker;
