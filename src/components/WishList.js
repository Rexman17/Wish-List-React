import React from 'react';
import Wish from './Wish'

const WishList = (props) => {
  // console.log("WishList props:", props);

  const mappedWishes = props.wishes.map((wish) => {
    return <Wish wish={wish} key={wish.id} handleDelete={props.handleDelete} handlePatch={props.handlePatch} />
  })

  return (
    <div className="row container-fluid">
      {mappedWishes}
   </div>
  )

}

export default WishList;
