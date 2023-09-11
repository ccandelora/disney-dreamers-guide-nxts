import React from "react";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

const getData = async () => {
  const res = await fetch(
    "https://queue-times.com/en-US/parks/8/queue_times.json",
    { cache: "no-cache" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function AnimalKingdomWaitTimes() {
  const lands = await getData();

  return (
    <>
      <Hero
        photo="/stephanie-klepacki-M1Pjq6RPDFU-unsplash.jpg"
        alt="Animal Kingdom Wait Times"
        title="Animal Kingdom Wait Times"
      />
      <div className="bg-white ">
        <ParkCard lands={lands} />
      </div>
    </>
  );
}

export default AnimalKingdomWaitTimes;
