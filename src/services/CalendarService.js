// function listEvents(token) {
//     AuthService.getToken().then(token => axios({
//         method: "post",
//         url: `https://www.googleapis.com/calendar/v3/freeBusy?access_token=${token}`,
//         data: {
//           timeMin: convertedTimeFrame.start,
//           timeMax: convertedTimeFrame.end,
//           items: attendeesFreeBusyFormat
//         } 
//   }

import axios from "axios";
import moment from "moment";
import AuthService from "./AuthService";
import findAvailableTimes from "../helpers/FindAvailableTimes";
import meetingRoomData from "../resources/MeetingRoomData";
export function getNexCalendarEvent() {
  return new Promise((resolve, reject) => {
    AuthService.getToken().then(token => axios({
      method: "post",
      url: `https://www.googleapis.com/calendar/v3/calendars/calendarId/events?
access_token=${token}`,
      data: {
        timeMin: convertedTimeFrame.start,
        timeMax: convertedTimeFrame.end,
        items: attendeesFreeBusyFormat
      }
    })
      .then((response) => {
        if (response.status >= 500) {
          reject(response.status);
        } else if (response.status >= 400) {
          reject(response.status);
        }
        const freeBusy = findAvailableTimes(response.data, duration);
        resolve(freeBusy);
      })
      .catch((error) => {
        reject(error);
      }));
  });
}