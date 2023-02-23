import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  // console.log(student, interviewer);
  function reset () {
    setStudent('')
    setInterviewer(null)
  }
  function cancel (){
    reset()
    props.onCancel()
  } 

  function save() {
    props.onSave(student, interviewer)
  }

   return(
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
    <form onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          type="text"
          placeholder="Enter Student Name"
          onChange={(event) => setStudent(event.target.value)}
          name={student}
        />
      </form>
      <InterviewerList 
        interviewers={props.interviewers}
        interviewer={interviewer}
        setInterviewer={setInterviewer}
      />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onClick={save}>Save</Button>
      </section>
    </section>
  </main>
  )
}