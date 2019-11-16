import React, { Component } from 'react';
import Search from './Search';

class Collapser extends Component {
  constructor(props) {
    super(props);
      this.state = {
        collapse: true,
      }
      this.collapseBlock = this.collapseBlock.bind(this);
  }

  collapseBlock() {
    this.setState((oldState) => ({collapse: !oldState.collapse}));
  }
  
  render() {
    return (
      <div className={this.state.collapse? "open row": "closed row"} data-testid="collapse-block">
        <button type="button"
          className="btn btn-danger"
          onClick={this.collapseBlock}
          data-testid="collapse-button">
        </button>
        {/* <Search add={this.addCharacter} /> */}
      </div>
    )
  }
}

export default Collapser;