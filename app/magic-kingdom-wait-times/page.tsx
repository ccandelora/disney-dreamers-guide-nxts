import React from "react";
import ParkCard from "../../components/ParkCard";
import Hero from "../../components/Hero";

const getData = async () =>  {
  const api = "https://queue-times.com/en-US/parks/6/queue_times.json";
  const res = await fetch(api, { cache: "no-cache" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


async function MagicKingdomWaitTimes() {
  const photo = "/younho-choo-f6ImWlMhn18-unsplash.jpg";
  const alt = "Magic Kingdom";
  const title = "Magic Kingdom Wait Times";
  const lands = await getData();

  return (
    <>
      <Hero photo={photo} alt={alt} title={title}/>
      <div className="bg-white ">
        <ParkCard lands={lands}/> 
      </div>
    </>
  );
}

export default MagicKingdomWaitTimes;
