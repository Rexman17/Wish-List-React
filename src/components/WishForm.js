import React from 'react';

const holidaysEndpoint = 'http://localhost:3000/api/v1/holidays'
// const wishesEndpoint = 'http://localhost:3000/api/v1/wishes'
class WishForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      image: '',
      price: '',
      holidays: [],
      selectedHoliday: ''
    }
  }

  componentDidMount() {
    fetch(holidaysEndpoint).then(r => r.json()).then(holidays => { this.setState({ holidays: holidays }) })
  }

  holidayOptions = () => {
    return this.state.holidays.map((h) => {
      return <option key={h.id}>{h.name}</option>
    })
  }

  handleChange = (event) => {
    // console.log(e.target.value);
    event.persist()
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handlePost(this.state)
    // reset form fields to blank
    this.setState({
      name: '',
      description: '',
      image: '',
      price: ''
    })
    alert("New wish has been added below! This does not guarantee you will get the gift. Sorry.");
  }

  render() {
    // console.log("WishForm props", this.props);
    return(
      <div><br />
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col">
          <p style={{fontFamily: 'Lobster', fontSize: '20px', marginTop: '10px'}}>Name</p>
            <input type="text" name="name" className="form-control" placeholder="whachu want?" onChange={this.handleChange} value={this.state.name}/>
          </div>
          <div className="col">
          <p style={{fontFamily: 'Lobster', fontSize: '20px', marginTop: '10px'}}>Description</p>
            <input type="text" name="description" className="form-control" placeholder="description..." onChange={this.handleChange} value={this.state.description}/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
          <p style={{fontFamily: 'Lobster', fontSize: '20px', marginTop: '20px'}}>Image Url</p>
            <input type="text" name="image" className="form-control" placeholder="image url..." onChange={this.handleChange} value={this.state.image}/>
          </div>
          <div className="col">
          <p style={{fontFamily: 'Lobster', fontSize: '20px', marginTop: '20px'}}>Price</p>
            <input type="text" name="price" className="form-control" placeholder="$$$" onChange={this.handleChange} value={this.state.price}/>
          </div>
          </div>
          <div className="form-row">
            <button type="submit" className="btn btn-info" id="submit-button" >Submit</button>
          </div>
        </form>
      </div>
    )
  }


}


export default WishForm;




// <select name="selectedHoliday" className="custom-select" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.selectedHoliday} style={{width: '105%', margin: '10px'}}>
// <option style={{width: '80%'}} default>Holiday...</option>
// {this.holidayOptions()}
// </select>
