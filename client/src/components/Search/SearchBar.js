import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

class SearchBar extends Component {

  state = {term: ""}

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onInputChange(term);
  }

  render() {
    return (
      <div>
        <h3>Enter Search input</h3>
        <Input onChange={this.onInputChange}
               value={this.state.term}
               fluid
               label={"Video Search"}
               style={{"marginTop":"10px"}}
        />
      </div>
    );
  }
}

export default SearchBar;