import React from "react";

const List = props => {
  return (
    <div>
      <h2>Popular Locations</h2>
      <ul>
        {props.data.map(result => {
          return (
            <li key={result.bookingId}>
              {result.name.toLowerCase().indexOf("airport") === -1 ? (
                <span className="city">City</span>
              ) : (
                <span className="airport">Airport</span>
              )}
              <span>
                {result.iata ? `${result.name} (${result.iata})` : result.name}
                <br />
                {` ${(result.city, result.country)}`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
