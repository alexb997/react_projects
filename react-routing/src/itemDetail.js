import React, {useState,useEffect} from 'react';

function ItemDetails( {match} ) {
  useEffect(() =>{
    fetchItem();
    console.log(match);
  },[]);

  const [item,setItem] =useState({});

  const fetchItem= async()=>{
    const fetchItem = await fetch(
        `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
    const item = await fetchItem.json();
    console.log(item.data.item);
    setItem(item.data.item);
  }

    return (
      <div>
        <h1>{item.name}</h1>
      </div>
    );
  }
  
  export default ItemDetails;
  