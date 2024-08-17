import React, { Component } from 'react';

export default class CopyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: 'CLICK TO COPY',
    };
  }

  copyToClipboard = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ tooltip: 'COPIED' });
      setTimeout(() => this.setState({ tooltip: 'CLICK TO COPY' }), 2000);
    });
  };

  handleMouseOver = () => {
    this.setState({ tooltip: 'CLICK TO COPY' });
  };

  render() {
    const { tooltip } = this.state;

    return (
      <div className="tooltip-container">
        <div className="tooltip">{tooltip}</div>
        <button
          className="copy-button"
          onClick={this.copyToClipboard}
          onMouseOver={this.handleMouseOver}
        >
          <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" fill="none" viewBox="0 0 24 24" className="icon-sm">
            <path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    );
  }
}
