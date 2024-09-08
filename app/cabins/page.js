import CabinList from "@/app/_components/CabinList";
import React, {Suspense} from "react";
import Spinner from "../_components/Spinner";

// This revalidate HAS to be a MAGIC number and cannot be computated
// Incremental Static Regeneration(ISR) -> basically means that it will fetch data from time to time getting freash data over a period of time
/** 
 * Reason:
 * Is because we cannot possibly fetch data everytime 1 user refreshes the page and re-render it, it will be very costly and time consuming and also it doesn't make sense.
 * Therefore we will need a middle ground for this kind of scenario
 * Using Revalidate variable as the time keeper to reach out for data after awhile will be the middle ground
*/
export const revalidate = 3600; // this is seconds
export const metadata = {
  title: "Cabins"
}

export default function Page() {
  
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      {/* Add Suspense over here*/}
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
