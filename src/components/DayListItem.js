import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
const dayClass = classNames('day', {
  'day-list__item': props.name,
  'day-list__item--selected': props.selected === true,
  'day-list__item--full': props.spots === 0
});

const formatSpots = () => {
if (props.spots === 0) {
  return <span>no spots remaining</span>
} else if (props.spots === 1) {
  return <span>1 spot remaining</span>
}
 return (
  <span>{props.spots} spots remaining</span>
 )
};

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass} data-testid='day'>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
