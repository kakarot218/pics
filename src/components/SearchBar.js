// on change method gets called whenever the text in input tag gets changed.
//Another method to impement event handler is that by directly using arrow function (event) => {whatever.......}

import React from "react";

class SearchBar extends React.Component {

  // onInputChange(event) {
  //   console.log(event);  //OP
  //   console.log(event.target.value);
  // }

  state = { term : ""};

onFormSubmit = (event) => {   //?????????One way to solve this keyword error. Second is as below in onChange using arrow func directly there
  event.preventDefault();  //we did this to get rid of browser's default actions like automatic submit and all.
  // console.log(this.state.term);  //Error bcz it can not read property of term due to prevention. it refers like drive() instead of this.drive()refer the video.

  this.props.onSubmit(this.state.term);
}

  render(){
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange}/>  Don't use paranthesis"()" here because we don't want this onInputChnage to be called every time component get rendered. */}
            <input type="text" value={this.state.term} onChange={(event)=> this.setState({term : event.target.value})}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
