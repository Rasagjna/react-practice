import React from 'react'
import {useState, useEffect } from 'react'
import Shimmer from './Shimmer';
import menu_data from './menu'
import { useParams } from 'react-router';
import { RESTAURANT_MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    //API call to get the menu of the restaurant based on the resId
    fetchMenu();
  }, [])
  const fetchMenu = async () => {
    // const data = await fetch(`${RESTAURANT_MENU_API}${resId}`)
    // const json = await data.json();
    // console.log(data);
    // import menu data

    const json = menu_data
    console.log(json)
   setResInfo(json.data);
  }
  if (resInfo === null) {
    return <Shimmer/>;
  }
  const {name,cusines,cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
  return (
    <div>
      <h1>{resInfo?.cards[0]?.card?.info?.name}</h1>
      <h1>{name}</h1>
      <h3>{cusines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>French Fries</li>
        <li>Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu