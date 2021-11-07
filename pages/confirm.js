import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";

const Confirm = () => {
const router=useRouter()
const {Pickup,Dropoff}=router.query;
console.log(Pickup)
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();
console.log(Pickup,Dropoff)
  const getPickUpCoordinatets = () => {
     const Pickup = "Santa Monica";

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${Pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWlsYW4yNiIsImEiOiJja3ZseGkyaDAza2NyMnBwZzl4ODA3OHd4In0.-lfouQWvFtyCJdDxA4B35g",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinatets = () => {
    const Dropoff = "Los Angeles";

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${Dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWlsYW4yNiIsImEiOiJja3ZseGkyaDAza2NyMnBwZzl4ODA3OHd4In0.-lfouQWvFtyCJdDxA4B35g",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickUpCoordinatets();
    getDropOffCoordinatets();
  }, []);
  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>ride selector confirm button</RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`;

const RideContainer = tw.div`
flex-1
`;
