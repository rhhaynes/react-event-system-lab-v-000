import React from 'react';

export default class EyesOnMe extends React.Component {
  blurFunc = () => {};
  focusFunc = () => {};
  render() {
    return (
      <button onBlur={this.blurFunc} onFocus={this.focusFunc}>
      </button>
    );
  }
}
