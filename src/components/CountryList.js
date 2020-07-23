import React from "react";
import CountryItem from "./CountryItem";

const CountryList = (props) => {
  const countries = props.countries;
  console.log("CountryList PROPS", props);

  const itemCount =
    countries.length >= 1 ? (
      <span>{`Displaying ${countries.length} items`}</span>
    ) : null;

  return (
    <div>
      <div className="itemCount">{itemCount}</div>
      <div className="countryList">
        {countries.map((country) => {
          return <CountryItem key={country.numericCode} country={country} />;
        })}
      </div>
    </div>
  );
};

export default CountryList;
