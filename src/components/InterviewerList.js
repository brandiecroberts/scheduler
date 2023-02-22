import React from 'react';
import 'components/InterviewerList.scss'
import InterviewerListItem from './InterviewerListItem';


export default function InterviewerList(props) {
  console.log(props);
 
const interviewList = props.interviewers.map(interview => {
  return (
    <InterviewerListItem 
          id={interview.id}
          name={interview.name}
          avatar={interview.avatar}
          selected={interview.id === props.interviewer}
          setInterviewer={props.setInterviewer}
      />
  )
})



  return(
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{interviewList}</ul>
</section>
  )
}