import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";
const confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
  const getPickupCoordinates = (pickup) => {
    // const pickup = "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaXRzYW51YmhhIiwiYSI6ImNrdncxZmVobzl4cGQycHF3c2Iyc3B3bHUifQ.uPnVvnJFyh7diCeu5qLFvA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });
  };
  const getDropOffCoordinates = (dropoff) => {
    // const dropoff = "Los Angeles";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaXRzYW51YmhhIiwiYSI6ImNrdncxZmVobzl4cGQycHF3c2Iyc3B3bHUifQ.uPnVvnJFyh7diCeu5qLFvA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default confirm;
const Wrapper = tw.div`
flex h-screen flex-col 
`;
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;
const ConfirmButtonContainer = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
bg-black text-white p-3 rounded-sm flex justify-center m-4 text-xl
`;
const ButtonContainer = tw.div`
rounded-full bg-white absolute top-4 left-4 z-10
`;
const BackButton = tw.img`
h-full object-contain
`;
