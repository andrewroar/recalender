import { useRef, useState, useEffect } from "react";
import getDatesofWeek from "../scripts/getDatesofWeek";
import showNotebyWeek from "../scripts/showNotebyWeek";
import "../css/calender.css";
import Note from "./note";

import ReactDOM from "react-dom";

//import { DragDropProvider } from "@devexpress/dx-react-grid-material-ui";

function Calendar(props) {
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  let [targetWeek, setTargetWeek] = useState(0);

  //This is used for the note to reference the date/week they belong in

  let calenderPlacementDate = getDatesofWeek(targetWeek).Sunday.date;

  //Add new note to the targeted tr
  let addNewEvent = (event) => {
    let targetTR = event.target;
    let createNewNote = () => {
      var div = document.createElement("div");
      ReactDOM.render(
        <Note
          time={event.target.parentElement.attributes.time.value}
          message={"New Event"}
          refdate={event.target.parentElement.attributes.refdate.value}
          container={div}
        />,
        event.target.appendChild(div)
      );
    };

    try {
      //Create new Note
      createNewNote();

      //Because I use a hacky way to create the new note, this will generate alot of empty div
      //This is here to clear out these empty div
      if (targetTR.firstChild.childElementCount == 0) {
        targetTR.removeChild(targetTR.firstChild);
      }
    } catch (e) {
      return;
    }
  };

  //Moving to next or previous week
  //For some reason it will form an infinite loop if I dont seperate them
  //Will investigate how to overcome this

  const increaeTargetWeek = () => {
    targetWeek = targetWeek + 1;
    setTargetWeek(targetWeek);
    //////////Hide note which does not belong to this week and show the rest/////////
    let NewcalenderPlacementDate = getDatesofWeek(targetWeek).Sunday.date;
    let notes = document.getElementsByClassName("event-frame");
    let lengthOfNotes = notes.length;
    showNotebyWeek(notes, lengthOfNotes, NewcalenderPlacementDate);
  };
  const decreaeTargetWeek = () => {
    targetWeek = targetWeek - 1;
    setTargetWeek(targetWeek);
    //////////Hide note which does not belong to this week and show the rest/////////
    let NewcalenderPlacementDate = getDatesofWeek(targetWeek).Sunday.date;
    let notes = document.getElementsByClassName("event-frame");
    let lengthOfNotes = notes.length;
    showNotebyWeek(notes, lengthOfNotes, NewcalenderPlacementDate);
  };

  //////////////////////////////////////////////////

  return (
    <div>
      <div className="schedule_appender">
        <button onClick={decreaeTargetWeek} className={"calender-btn"}>
          Last Week
        </button>
        <button onClick={increaeTargetWeek} className={"calender-btn"}>
          Next Week
        </button>
      </div>
      <div className="calender">
        <table>
          <thead>
            <tr className="calender-table-date-tr">
              <td>
                <div></div>
              </td>
              <td className={getDatesofWeek(targetWeek).Sunday.date}>
                <div>Sun</div>
                <div>{getDatesofWeek(targetWeek).Sunday.date}</div>
              </td>
              <td className={getDatesofWeek(targetWeek).Monday.date}>
                <div>Mon</div>
                <div>{getDatesofWeek(targetWeek).Monday.date}</div>
              </td>
              <td className={getDatesofWeek(targetWeek).Tuesday.date}>
                <div>Tue </div>

                <div>{getDatesofWeek(targetWeek).Tuesday.date}</div>
              </td>
              <td className={getDatesofWeek(targetWeek).Wednesday.date}>
                <div>Wed </div>
                <div>{getDatesofWeek(targetWeek).Wednesday.date}</div>
              </td>
              <td className={getDatesofWeek(targetWeek).Thursday.date}>
                <div>Thu </div>
                <div>{getDatesofWeek(targetWeek).Thursday.date}</div>
              </td>
              <td className={getDatesofWeek(targetWeek).Friday.date}>
                <div>Fri </div>
                <div>{getDatesofWeek(targetWeek).Friday.date}</div>
              </td>
              <td className={getDatesofWeek(targetWeek).Saturday.date}>
                <div>Sat</div>
                <div> {getDatesofWeek(targetWeek).Saturday.date}</div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr
              className="calender-table-tr"
              startingHour="0"
              time="00:00-01:00"
              refdate={calenderPlacementDate}
            >
              <td>00:00-01:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="1"
              time="01:00-02:00"
              refdate={calenderPlacementDate}
            >
              <td>01:00-02:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="2"
              time="02:00-03:00"
              refdate={calenderPlacementDate}
            >
              <td>02:00-03:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="3"
              time="03:00-04:00"
              refdate={calenderPlacementDate}
            >
              <td>03:00-04:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="4"
              time="04:00-05:00"
              refdate={calenderPlacementDate}
            >
              <td>04:00-05:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="5"
              time="05:00-06:00"
              refdate={calenderPlacementDate}
            >
              <td>05:00-06:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="6"
              time="06:00-07:00"
              refdate={calenderPlacementDate}
            >
              <td>06:00-07:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="7"
              time="07:00-08:00"
              refdate={calenderPlacementDate}
            >
              <td>07:00-08:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="8"
              time="08:00-09:00"
              refdate={calenderPlacementDate}
            >
              <td>08:00-09:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="9"
              time="09:00-10:00"
              refdate={calenderPlacementDate}
            >
              <td>09:00-10:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="10"
              time="10:00-11:00"
              refdate={calenderPlacementDate}
            >
              <td>10:00-11:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="11"
              time="11:00-12:00"
              refdate={calenderPlacementDate}
            >
              <td>11:00-12:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="12"
              time="12:00-13:00"
              refdate={calenderPlacementDate}
            >
              <td>12:00-13:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="13"
              time="13:00-14:00"
              refdate={calenderPlacementDate}
            >
              <td>13:00-14:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="14"
              time="14:00-15:00"
              refdate={calenderPlacementDate}
            >
              <td>14:00-15:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="15"
              time="15:00-16:00"
              refdate={calenderPlacementDate}
            >
              <td>15:00-16:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="16"
              time="16:00-17:00"
              refdate={calenderPlacementDate}
            >
              <td>16:00-17:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="17"
              time="17:00-18:00"
              refdate={calenderPlacementDate}
            >
              <td>17:00-18:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="18"
              time="18:00-19:00"
              refdate={calenderPlacementDate}
            >
              <td>18:00-19:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="19"
              time="19:00-20:00"
              refdate={calenderPlacementDate}
            >
              <td>19:00-20:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="20"
              time="20:00-21:00"
              refdate={calenderPlacementDate}
            >
              <td>20:00-21:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="21"
              time="21:00-22:00"
              refdate={calenderPlacementDate}
            >
              <td>21:00-22:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="22"
              time="22:00-23:00"
              refdate={calenderPlacementDate}
            >
              <td>22:00-23:00</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
            <tr
              className="calender-table-tr"
              hour="23"
              time="23:00-23:59"
              refdate={calenderPlacementDate}
            >
              <td>23:00-23:59</td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
              <td onClick={addNewEvent}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;

/*backup code

  //Use useEffect to highlight today
  //useEffect(() => {
  //  const todayDate = new Date();
  //  //Find Today
  //  let todayTargetDate = `${todayDate.getDate()}/${
  //    todayDate.getMonth() + 1
  //  }/${todayDate.getFullYear()}`;
  //  let threads = document.getElementsByClassName(todayTargetDate);
  //  console.log(threads[0]);
  //  //Highlight it in red
  //  threads[0].style.backgroundColor = "red";
  //}, []);


                          //console.log(e.target.attributes.time.value);
                  //console.log(e.target.attributes.date.value);
                  //console.log(e.target.parentElement.attributes.hour.value);
                  //e.target.appendChild(<h1>Hello</h1>);
      */
