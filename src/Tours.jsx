import React from "react";
import { useGlobalContext } from "./context";
import Tour from "./Tour";

const Tours = () => {
  const { tours } = useGlobalContext();

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
