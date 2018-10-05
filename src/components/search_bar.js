import React, {Component} from 'react';

// Class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Type your text' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    // Event handler
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
