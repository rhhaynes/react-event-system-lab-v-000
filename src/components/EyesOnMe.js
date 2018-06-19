import React from 'react';

export default class EyesOnMe extends React.Component {
  render() {
    return (
      <button onBlur={this.blurFunc} onFocus={this.focusFunc}>
      </button>
    );
  }
}
