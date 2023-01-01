import React from "react";
import { useGlobalContext } from "./context";

const Tour = ({ tour }) => {
  const { removeTour, setShowMore, showMore } = useGlobalContext();

  return (
    <article className="single-tour">
      <img src={tour.image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button className="read-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(tour.id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
