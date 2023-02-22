import React from "react";
import 'components/InterviewerListItem.scss'
import classNames from "classnames";

export default function InterviewerListItem(props) {
  console.log(props)
  const setInterviewer = classNames('interview', {
    'interviewers__item': props.id,
    'interviewers__item--selected': props.selected === true,
  });


  
  return (
    <li className={setInterviewer}
    onClick={() => props.setInterviewer(props.id)}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>
  )
} 