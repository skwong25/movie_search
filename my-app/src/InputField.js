/**
 * Child Class 1 - to handle the input field 
 * Stateless Component Class (could be turned into a function component )
 */
import React from 'react';

export class InputField extends React.Component {

  render() {

    let options = []; 
      for (let i = 1; i< 6; i++) { 
      options.push(<option key={i}>{i}</option>) 
    }

    return ( 
      <div>
      <br/>
      <label for="search"> Enter a keyword: </label>
      <input 
        type="text" 
        name="search" 
        id="search" 
        onChange={this.props.onChange}>
      </input>
      <br/>
      <label for="number">Number of search results: </label>
      <select id="number" name="number" onChange={this.props.handleNumber}>
        {options}
      </select>
      </div>
    ) 
  }
}


// Question: How do we get the <input/> field to pass its value on onChange? 
// An input's value is passed back within an object: e.target.value 

// If OMDb gave us the runtime it could work out how many movies we could watch