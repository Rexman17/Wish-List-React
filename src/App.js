import React, { Component } from 'react';
import './App.css';
import WishContainer from './components/WishContainer'
import HolidayContainer from './components/HolidayContainer'
import Banner from './components/Banner'
import Sort from './components/Sort'
import Login from './Login'
import StoreMapContainer from './components/StoreMapContainer'
import { Route, Switch } from 'react-router-dom';
// import WishForm from './components/WishForm'

const storesEndpoint = 'http://localhost:3000/api/v1/stores'
class App extends Component {

  state = {
    sortBtnId: '',
    stores: []
  }

  sortBtnId = (buttonId) => {
    // console.log(buttonId);
    this.setState({ sortBtnId: buttonId })
  }

  componentDidMount() {
    fetch(storesEndpoint).then(r => r.json()).then(stores => this.setState({stores}))
  }

  render() {
    return (

        <React.Fragment>
          <Switch>
          <Route exact path="/homepage" render={() => {
            return (
              <div className="container-fluid">
                <Banner />
                <Sort sortBtnId={this.sortBtnId}/>
                <div className="row content container-fluid" style={{paddingLeft: '165px'}}>
                  <div className="container-fluid col-sm-3">
                    <HolidayContainer />
                  </div>
                  <div className="col-sm-9 bg-light container-fluid">
                    <WishContainer sortBtnId={this.state.sortBtnId} stores={this.state.stores} />
                  </div>
                </div>
              </div>
            )
          }} />
            <Route exact path="/" component={Login} />
            <Route exact path="/ShoppingMap" render={() => <StoreMapContainer stores={this.state.stores} isMarkerShown/> }/>
          </Switch>
        </React.Fragment>

    );
  }
}


export default App;

// <div className="container-fluid">
//   <Banner />
//   <div className="row">
//     <div className="col">
//       <HolidayContainer />
//     </div>
//     <div className="col-10">
//       <div className="col-14">
//         <WishContainer />
//       </div>
//     </div>
//   </div>
// </div>
