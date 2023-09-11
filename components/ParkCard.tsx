"use client";
import React from "react";

interface ILands {
    id: number;
    name: string;
    rides: IRides[];
}

interface IRides {
  id: number;
  name: string;
  is_open: boolean;
  wait_time: number;
  last_updated: string;
}



export default function ParkCard(props: { lands: { lands: ILands[] }; }) {
  const { lands } = props.lands;
  return (
    <div className="mx-auto py-16  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 bg-white my-0">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8"
      >
        {lands.map((land) => {
          return (
            <li key={land.name} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                <h2 className="font-bold">{land.name}</h2>
                {land.rides.map((ride) => {
                  return (
                    <div key={ride.id} className="relative border-4 border-slate-200 my-5 rounded-lg">
                      <ul className="p-3">
                        <li className="text-lg font-bold">
                          <h3>{ride.name}</h3>
                        </li>
                        <li className="">
                          
                          {ride.is_open ? (
                            <div className="text-green-700" >Open</div>
                          ) : (
                            <div className="text-red-700">Closed</div>
                          )}
                        </li>
                        <li className="">
                          Wait Time: {ride.wait_time}{" "}
                          {ride.wait_time === 1 ? "Minute" : "Minutes"}{" "}
                        </li>
                        <li className="">Last Updated: {new Date(ride.last_updated).toLocaleString()}</li>
                      </ul>
                    </div>
                    
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
