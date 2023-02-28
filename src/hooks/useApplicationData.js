import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function updateSpots(id, appointments) {
    let counter = 0;
    const day = state.days.find((element) => {
      return element.appointments.includes(id);
    });
    for (const appointment of day.appointments) {
      if (appointments[appointment].interview === null) {
        counter++;
      }
    }
    const updatedDay = { ...day, spots: counter };
    const updatedDays = [...state.days];
    updatedDays[day.id - 1] = updatedDay;

    return updatedDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(id, appointments);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState((response) => ({ ...state, appointments, days }));
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(id, appointments);

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      setState((response) => ({ ...state, appointments, days }));
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
