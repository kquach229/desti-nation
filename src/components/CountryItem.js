import React from "react";
import { withRouter } from "react-router-dom";

const CountryItem = (props) => {
  const { history } = props;

  const onClickFlag = (e) => {
    e.preventDefault();
    history.push(`/country/${props.country.name}`);
  };

  console.log("COUNTRYITEM PROPS", props);
  return (
    <div onClick={onClickFlag} className="card">
      <img className="flag__image" src={props.country.flag} alt="flag" />
      <h5>{props.country.name}</h5>
    </div>
  );
};

export default withRouter(CountryItem);
