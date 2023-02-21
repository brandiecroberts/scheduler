import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
const dayClass = classNames('day', {
  'day-list__item': props.name,
  'day-list__item--selected': props.selected === true,
  'day-list__item--full': props.spots === 0
})

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining...</h3>
    </li>
  );
}
