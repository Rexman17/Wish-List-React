import React from 'react';
import HolidayList from './HolidayList'
// import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

const holidaysEndpoint = 'http://localhost:3000/api/v1/holidays'
class HolidayContainer extends React.Component {
  // initial state
  state = {
    holidays: []
  }

  componentDidMount() {
    fetch(holidaysEndpoint)
    .then(r => r.json())
    .then((holidays) => { this.setState({ holidays: holidays }) })
  }

  // handleClick = () => {
  //   console.log("triggered click fo holiday");
  // }


  render() {
    return(

        <div className="holidays" style={{background: '#FF69B4'}}>

          <div> <br />
            <h3 style={{fontFamily: 'Lobster'}}>Some of my favorite stores: </h3><br />
            <a href="http://www.bloomingdales.com" target="_blank">
              <button className="btn btn-outline-secondary btn-lg btn-default">
                <img style={{width: '300px', height: '200px', paddingBottom: '10px'}} src="https://assets.digitalservices.ggp.com//content/dam/rw-2/images/tenant-images/tenant-logos/bloomingdales-logo-553x260-v1.png" alt="bloomies logo"/>
              </button>
            </a>
            <br />
            <a href="https://www.loft.com/" target="_blank">
              <button className="btn btn-outline-secondary btn-lg btn-default">
                  <img src="https://www2.palomar.edu/pages/calendar/files/2017/10/LOFTJPEG.jpg" className="thumbnail" style={{width: '300px', height: '200px', paddingBottom: '10px'}} alt="ann taylor"/>
              </button>
            </a>
            <a href="https://www.joie.com/" target="_blank">
              <button className="btn btn-outline-secondary btn-lg btn-default">
                <img src="https://www.quirkeebirds.com/images//2017/logos_labels_-_uploaded_2017.03.15/Joie_logo_jpg.png" className="thumbnail" style={{width: '300px', height: '200px', paddingBottom: '10px'}} alt="joie"/>
              </button>
            </a>
            <a href="https://www.madewell.com/" target="_blank">
              <button className="btn btn-outline-secondary btn-lg btn-default">
                <img src="https://fashionunited.com/images/201808/Madewell-1.jpg" style={{width: '300px', height: '200px', paddingBottom: '10px'}} alt="madewell"/>
              </button>
            </a>
            <a href="https://www.containerstore.com/welcome.htm" target="_blank">
              <button className="btn btn-outline-secondary btn-lg btn-default">
                <img src="http://www.seeklogovector.com/wp-content/uploads/2018/05/the-container-store-logo-vector.png" style={{width: '300px', height: '200px', paddingBottom: '10px'}} alt="container store"/>
              </button>
            </a>
          </div>
          <div>
            <h2 className="holiday-h1">I am open to gifts on any of these occasions...</h2><br />
            <HolidayList holidays={this.state.holidays}/>
          </div>
        </div>

    )
  }

}


export default HolidayContainer;
