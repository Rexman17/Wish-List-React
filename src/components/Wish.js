import React from 'react';
import EditForm from './EditForm'

class Wish extends React.Component {

  constructor(props, context) {
   super(props, context)

   this.state = {
     isEditing: false
   }
 }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleClick = (id) => {
    // console.log(event.target.id);
    this.props.handleDelete(id)
  }


    render() {
      // console.log("Wish props:", this.props.wish.holidays)
      // const holidays = this.props.wish.holidays.map(h => h.name)
      // debugger
      return (
        <div className="col-sm">
        {this.state.isEditing ? <EditForm wish={this.props.wish} handlePatch={this.props.handlePatch} /> : null}
          <div className="col-md-4">
            <div className="card mb-4 box-shadow" style={{width: '30rem'}}>
              <img src={this.props.wish.image} style={{width: '100%'}} className="img-thumbnail mx-auto" alt={this.props.wish.description}/>
                <div className="card-body">
                <h5 className="card-title" style={{fontFamily: 'Roboto', fontSize: '21px'}}>{this.props.wish.name}: ${this.props.wish.price}.00</h5>
                <p className="card-text" style={{fontFamily: 'Courgette', fontSize: '18px'}}>{this.props.wish.description}</p>

                  <button onClick={() => this.handleClick(this.props.wish.id)} type="button" className="close">X</button>
                  <button onClick={this.toggleEdit} type="button" className="btn-sm">Edit Item</button>
                </div>
            </div>
          </div>
        </div>
      )
    }

}

export default Wish;
// if (this.state.isEditing) {
//   return (
//     <div>
//       <h1>Edit Wish</h1>
//         <EditForm wish={this.props.wish} handlePatch={this.props.handlePatch}/>
//     </div>
//   )
// }
