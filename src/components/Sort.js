import React from 'react';


class Sort extends React.Component {
  // do i even need state?
  // state = {
  //   clickedButtonId: ''
  // }

  // why do i need state if i can just send event? and get the id that way?
  handleClick = (event) => {
    // console.log(event.target.id);
    // this.setState({ clickedButtonId: event.target.id })
    this.props.sortBtnId(event.target.id)
  }

  render() {
    // console.log("sort props", this.props);
    return(
      <div className="btn-group-horizontal" style={{background: '#FF69B4'}}>
      <span id="sort-by-text" style={{fontSize: '25px', fontFamily: 'Lobster', paddingLeft: '700px'}}>Sort by: </span>
        <button id="highToLow" onClick={this.handleClick} className="btn btn-outline-primary btn-lg btn-default" type="button" style={{textAlign: 'center', color: 'white', fontFamily: 'Lobster', fontSize: '25px'}}>
          $$$: High to Low
        </button>
        <button id="lowToHigh" onClick={this.handleClick} className="btn btn-outline-primary btn-lg btn-default" type="button" style={{textAlign: 'center', color: 'white', fontFamily: 'Lobster', fontSize: '25px'}}>
          $$$: Low to High
        </button>
        <button id="aToZ" onClick={this.handleClick} className="btn btn-outline-primary btn-lg btn-default" type="button" style={{textAlign: 'center', color: 'white', fontFamily: 'Lobster', fontSize: '25px'}}>
          A-Z
        </button>
        <button id="zToA" onClick={this.handleClick} className="btn btn-outline-primary btn-lg btn-default" type="button" style={{textAlign: 'center', color: 'white', fontFamily: 'Lobster', fontSize: '25px'}}>
          Z-A
        </button>
      </div>
    )
  }
}

export default Sort;
