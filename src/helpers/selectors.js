export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter (state => state.name === day);
  
  if (!filteredDays[0]) {
    return [];
  }
  
  const filteredAppointments = filteredDays[0].appointments.map((appointment) => {
    return state.appointments[appointment]
  })
 
  return filteredAppointments;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerData = state.interviewers[interview.interviewer]
 
  const newInterview = {student: interview.student, interviewer: interviewerData }

  return newInterview;
}


