//This function loop through all the note in the page
//If the note does not believe to the given week, it will be hidden
//Otherwise it will be displayed

let showNotebyWeek = (notes, lengthOfNotes, calenderPlacementDate) => {
  var i;
  for (i = 0; i < lengthOfNotes; i++) {
    if (notes[i].attributes.refvalue.value != calenderPlacementDate) {
      notes[i].hidden = true;
    } else {
      notes[i].hidden = false;
    }
  }
};

module.exports = showNotebyWeek;
