import React, { Component } from 'react';

export default class StorePicker extends Component {
  render() {
    return (
      <form className="store__selector">
        <h2 className="store__title">Please Enter A Store</h2>
        <input type="text" className="store__input" />
        <button type="submit" className="store__submit">
          Visit Store →
        </button>
      </form>
    );
  }
}
