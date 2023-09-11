import React from "react";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

const  getData = async () => {
  const api = "https://queue-times.com/en-US/parks/5/queue_times.json";
  const res = await fetch(api, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function EpcotWaitTimes() {
  const lands = await getData();

  return (
    <>
      <Hero
        photo="/frances-gunn-c9z9RlCh0Zo-unsplash.jpg"
        alt="Epcot"
        title="Epcot Wait Times"
      />
      <div className="bg-white ">
        <ParkCard lands={lands} />
      </div>
    </>
  );
}

export default EpcotWaitTimes;
