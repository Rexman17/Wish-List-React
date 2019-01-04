import React from 'react';
import WishList from './WishList'
import WishForm from './WishForm'
import { NavLink } from 'react-router-dom';
// import StoreMapContainer from './StoreMapContainer'


const wishesEndpoint = 'http://localhost:3000/api/v1/wishes'
class WishContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = { wishes: [] }
  }

  // lifecycle method
  componentDidMount() {
    fetch(wishesEndpoint)
      .then(r => r.json())
      .then(wishes => {
        // debugger
        this.setState({
          wishes: wishes
        })
      })
  }


  handlePost = (newWish) => {
    // this.setState({wishes: [...this.state.wishes, newWish]})
    // console.log("u hit handle post");
    fetch(wishesEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newWish.name,
        description: newWish.description,
        image: newWish.image,
        price: newWish.price
      })
    })
    .then(r => r.json())
    .then(newWishObject => {
      // PESSIMISTIC
      // const wishes = Object.assign({}, this.state.wishes, newWishObject)
      this.setState({ wishes: [...this.state.wishes, newWishObject]}, () => console.log("update state is", this.state))
    })
  }

  // #####################################

  handleDelete = (id) => {
    // OPTIMISTIC
    var wishes = this.state.wishes.filter(wish => wish.id !== id)
    this.setState({wishes: wishes})

    fetch(`http://localhost:3000/api/v1/wishes/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
  }

  // #####################################
  handlePatch = (editedWish) => {
    // console.log("this is the", editedWish);
    // OPTIMISTIC RENDERING
    const wishes = this.state.wishes.map(w => {
      if (w.id === editedWish.id) {
        // debugger
        return editedWish
      } else {
        return w;
      }
    })
    this.setState({ wishes });

    fetch(`http://localhost:3000/api/v1/wishes/${editedWish.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: editedWish.name,
        description: editedWish.description,
        image: editedWish.image,
        price: editedWish.price
      })
    })
  }



  render() {
    // debugger
    let sorted = ''
    if (this.props.sortBtnId === 'lowToHigh') {
      for (var price in this.state.wishes) {
        sorted = this.state.wishes.sort(function(a,b) {
          return a.price - b.price
        })
      }
    } else if (this.props.sortBtnId === 'highToLow') {
      for (var price in this.state.wishes) {
        sorted = this.state.wishes.sort(function(a,b) {
          return b.price - a.price
        })
      }
    } else if (this.props.sortBtnId === 'aToZ') {
      for (var name in this.state.wishes) {
        sorted = this.state.wishes.sort(function(a,b) {
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
            return -1
          if (nameA > nameB)
            return 1
          return 0 //default return value
        })
      }
    } else if (this.props.sortBtnId === 'zToA') {
      for (var name in this.state.wishes) {
        sorted = this.state.wishes.sort(function(a,b) {
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameB < nameA) //sort string ascending
            return -1
          if (nameA > nameB)
            return 1
          return 0 //default return value
        })
      }
    }
// debugger
    // console.log("wish container props", this.props);
    return(
      <div className="wishes container bg-light" style={{width: '200rem', margin: '20px'}}>

          <h2 style={{fontFamily: 'Lobster'}}>Add a new wish...or <NavLink to="/ShoppingMap">Shop at a store I love!</NavLink></h2>
          <WishForm handlePost={this.handlePost}/>< br/>
          <h3 style={{width: '75%', color: '#FF69B4'}}>✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦</h3>
          < br/>
          {!this.state.editingMode ? <WishList wishes={sorted ? sorted : this.state.wishes} handleDelete={this.handleDelete} handlePatch={this.handlePatch}/> : null}

      </div>
    )
  }

}

export default WishContainer;
// price desc
// for (var price in wishes) {
//     wishes.sort(function(a, b) {
//     return a.price - b.price;
// })}
