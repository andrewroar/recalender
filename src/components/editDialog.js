import { React, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function AlertDialog(props, ref) {
  //Set State
  const [editMessage, setEditMessage] = useState(false);
  const [editTime, setEditTime] = useState(false);
  const [newMessage, setNewMessage] = useState(props.message);

  ///Material UI///
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //
  const handleClose = () => {
    props.dialogOpenDialog(false);
  };

  const handleEdit = () => {
    props.dialogOpenDialog(false);
    props.changeEventMessage(newMessage);
  };

  const handleDelete = () => {
    props.dialogOpenDialog(false);
    props.deleteEventMessage();
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen={fullScreen}
        fullWidth
        minWidth={"lg"}
      >
        <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {editMessage ? (
              <h5>
                Message:
                <input
                  style={{ height: "20px" }}
                  onChange={(element) => {
                    setNewMessage(element.target.value);
                  }}
                ></input>
              </h5>
            ) : (
              <h5
                onClick={() => {
                  setEditMessage(true);
                }}
              >
                Message: {props.message}
              </h5>
            )}
            <br></br>
            <h5>Time: {props.time}</h5>
            <br></br>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit} color="primary">
            Edit
          </Button>
          <Button
            onClick={handleDelete}
            style={{ "background-color": "red", color: "white" }}
          >
            Delete
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
