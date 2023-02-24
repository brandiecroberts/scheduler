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


