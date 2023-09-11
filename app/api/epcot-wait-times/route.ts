import { NextResponse } from "next/server";

export async function GET() {
      try {
            const respone = await fetch(
            "https://queue-times.com/en-US/parks/5/queue_times.json"
            );
            const data = await respone.json();
            console.log(data);
         
            return NextResponse.json(data, { status: 200 });
      } catch (error) {
            return NextResponse.json(error, { status: 500 });
      }
    }
