import React from "react";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

const getData = async () => {
  const api = "https://queue-times.com/en-US/parks/7/queue_times.json";
  const res = await fetch(api, { cache: "no-cache" });
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function HollywoodStudiosWaitTimes() {
  const lands = await getData();

  return (
    <>
      <Hero
        photo="/carol-kennedy-X5WdN60n6yk-unsplash.jpg"
        alt="Hollywood Studios Wait Times"
        title="Hollywood Studios Wait Times"
      />
      <div className="bg-white ">
        <ParkCard lands={lands} />
      </div>
    </>
  );
}

export default HollywoodStudiosWaitTimes;
