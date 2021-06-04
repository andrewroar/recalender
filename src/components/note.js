import "../css/note.css";
import { useRef, useState } from "react";
import DialogEdit from "./editDialog";

function Note(props) {
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  let frameRef = useRef();
  let h2ref = useRef();
  let pref = useRef();

  const handleClickh2 = () => {
    setOpenDialogEdit(true);
  };

  return (
    <div className={`event-frame`} refvalue={props.refdate} ref={frameRef}>
      <div className="event-word-container" onClick={handleClickh2}>
        <h2 ref={h2ref}>{props.message}</h2>
        <p ref={pref}>{props.time}</p>
      </div>

      {openDialogEdit ? (
        <DialogEdit
          dialogOpenDialog={(element) => {
            setOpenDialogEdit(element);
          }}
          //change the note message if this function is called
          changeEventMessage={(editedMessage) => {
            setOpenDialogEdit(false);

            h2ref.current.textContent = editedMessage;
          }}
          //remove the note if this function is called
          deleteEventMessage={() => {
            setOpenDialogEdit(false);

            frameRef.current.remove();
          }}
          message={props.message}
          time={props.time}
        />
      ) : null}
    </div>
  );
}

export default Note;
