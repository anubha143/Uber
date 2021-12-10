import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);
  // get ride duration from MAPBOX API
  // 1. pickCoordinates
  // 2. dropoffCoordinates
  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaXRzYW51YmhhIiwiYSI6ImNrdncxZmVobzl4cGQycHF3c2Iyc3B3bHUifQ.uPnVvnJFyh7diCeu5qLFvA`
    )
      .then((response) => response.json())
      .then((data) => setRideDuration(data.routes[0].duration / 100));
  }, [pickupCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} height="90" width="90" />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;
const Title = tw.div`
text-gray-500 text-xs text-center py-2 border-b 
`;
const CarList = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex items-center p-2
`;
const CarImage = tw.img`
mr-4
`;
const CarDetails = tw.div`
flex-1
`;
const Service = tw.div`
font-medium
`;
const Time = tw.div`
text-xs text-blue-500
`;
const Price = tw.div`
text-sm
`;
