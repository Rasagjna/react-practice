import ResuarantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    // State Variable - super powerful variable.
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("")
    const [filteredRestuarsnt,setFilterRestaurant] = useState([]);
    
    //Normal JS variable
    let listOfRestaurantsJS = [
    {
        "info": {
            "id": "264304",
            "name": "A-1 Chicken Pakoda",
            "cloudinaryImageId": "vx4b1v874q994ntbnhvf",
            "locality": "Kothapet & Dilsukhnagar",
            "areaName": "Gaddiannaram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Indian",
                "Chinese",
                "Mughlai",
                "shawarma"
            ],
            "avgRating": 4.2,
            "avgRatingString": "4.2",
            "sla": {
                "deliveryTime": 22
            },
           
    }},
    {
        "info": {
            "id": "264305",
            "name": "Dominos",
            "cloudinaryImageId": "vx4b1v874q994ntbnhvf",
            "locality": "Kothapet & Dilsukhnagar",
            "areaName": "Gaddiannaram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Indian",
                "Chinese",
                "Mughlai",
                "shawarma"
            ],
            "avgRating": 4.5,
            "avgRatingString": "4.2",
            "sla": {
                "deliveryTime": 22
            },
           
    }},
      {
        "info": {
            "id": "264306",
            "name": "MCD",
            "cloudinaryImageId": "vx4b1v874q994ntbnhvf",
            "locality": "Kothapet & Dilsukhnagar",
            "areaName": "Gaddiannaram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Indian",
                "Chinese",
                "Mughlai",
                "shawarma"
            ],
            "avgRating": 4.1,
            "avgRatingString": "4.2",
            "sla": {
                "deliveryTime": 22
            },
    }}
    ];
   
const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3741816&lng=78.55342569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log(data)
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

useEffect(()=>{
fetchData();
    },[]);

//conditional rendering
if(listOfRestaurants.length ===0){
    return <Shimmer/>
}
    return (
        <div className="body">
            <div className="filter"> 
                <div className="search">
                    <input type="text" className="search-box" value = {searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filter_res = listOfRestaurants.filter((res)=> (res?.info?.name).toLowerCase().includes(searchText.toLowerCase()))
                        setFilterRestaurant(filter_res)
                    }}>search</button>
                     </div>
                <button className="filter-btn" 
                onClick={()=>{    
                    const filteredList=listOfRestaurants.filter(res=>res.info.avgRating > 4)
                    setListOfRestaurants(filteredList)
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* restuarant card */}
                {/* <ResuarantCard resName = "Meghana Foods" cuisine = "Burger,Fast Food"/> */}
                {
                    filteredRestuarsnt.map(restaurant =>
                        (<Link to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}>
                        <ResuarantCard resData = {restaurant}/>
                        </Link>)
                    )
                }
                {/* <ResuarantCard resData = {restaurants[0]}/> */}
            </div>
        </div>
    )
}

export default Body;