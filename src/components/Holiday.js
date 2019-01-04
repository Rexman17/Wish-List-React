import React from 'react';


class Holiday extends React.Component {
  // const {this.props.holiday} = holiday

  render() {
    // console.log("holiday props:", this.props);
    return(
      <li id="side-btn" type="button" style={{textAlign: 'center', color: 'white', fontFamily: 'Lobster', fontSize: '30px'}}>
        {this.props.holiday.name}
      </li>
    )
  }
}



export default Holiday;
