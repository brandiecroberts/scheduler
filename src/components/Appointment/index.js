import React from 'react';
import 'components/Appointment/styles.scss'
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';




const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE';


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode (
    props.interview ? SHOW : EMPTY
  );
  
  const onAdd = () => {
    transition(CREATE);
  }

  

  return(
    <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={onAdd} />}
    {mode === CREATE && <Form  interviewers={props.interviewers} onCancel={back}/>}
    {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer}/>}
    </article>
)};