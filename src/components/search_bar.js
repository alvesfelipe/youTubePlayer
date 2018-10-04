import React, {Component} from 'react';

// Class based component
class SearchBar extends Component {

  constructor (props) {
    super(props);
    this.state = { term: 'Type your text' };
  }

  render () {
    // Event handler
    return (
    <div>
      <input
        value={this.state.term}
        onChange={(event) => this.setState({ term: event.target.value })}
      />
    </div>
    );
  }
}

export default SearchBar;
