import React from 'react';


class EditForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.wish.id,
      name: this.props.wish.name,
      description: this.props.wish.description,
      image: this.props.wish.image,
      price: this.props.wish.price,
      editing: this.props.editing
    }
  }


  handleSubmit = (event) => {
    event.preventDefault()
  // console.log('submitted');
    // next well send back to parent in handlePatch
    this.props.handlePatch(this.state)
    this.setState({ editing: !this.state.editing })
  }

  handleEdit = (e) => {
    // console.log(e.target.value);
    // e.persist()
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    // console.log("Edit form props", this.props);
    return(
      <div>
      {!this.state.editing ? <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-row" style={{ width: '63%' }}>

          Name
            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleEdit}/>

          Description
            <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleEdit}/>

          Image Url
            <input type="text" name="image" className="form-control" value={this.state.image} onChange={this.handleEdit}/>

          Price
            <input type="text" name="price" className="form-control"  value={this.state.price} onChange={this.handleEdit}/>

         <button type="submit" className="btn btn-info">Save</button>
        </div>

        </form>
      </div> : null}
      </div>
    )
  }
}

export default EditForm;

// <select name="selectedHoliday" className="custom-select" id="inputGroupSelect01" value={this.props.wish.selectedHoliday}>
//
// <option default>Which Holiday do you want this for?...</option>
// {this.props.holidayOptions()}
