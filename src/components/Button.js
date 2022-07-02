import React, {useEffect, useState} from 'react';


export default function Butto() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  
    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  function AlertLatLong() {
    alert("Latitude is " + lat + " Longitude is " + long);
  }
 
  return (
    <div className = "Butt">
    <button onClick={AlertLatLong}>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    </div>
  );

}

