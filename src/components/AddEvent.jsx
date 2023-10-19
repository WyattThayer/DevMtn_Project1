import { useState } from "react";
import PopUp from "./PopUp";
import axios from "axios";

const AddEvent = ({ initialEvent, editMode, deleting, id }) => {
  const [event, setEvent] = useState(initialEvent);
  const [isEditing, setIsEditing] = useState(editMode);

  const saveEditMode = async (e) => {
    let bodyObj = {
      description: e.description,
      place: e.place,
      time: e.time,
    };
    const response = await axios.put(`/editEvent/${id}`, bodyObj);

    if (!response.data.error) {
      setIsEditing(false);
      setEvent({ ...e, ...bodyObj });
    } else {
      alert("something went wrong");
    }
  };

  const enterEditMode = () => setIsEditing(true);
  return isEditing ? (
    <button>
      <PopUp
        initialEventData={event}
        editMode={isEditing}
        saveEditMode={saveEditMode}
        setEvent={setEvent}
        deleted={deleting}
      />
    </button>
  ) : (
    <button onClick={enterEditMode}>
      Edit Event
      <PopUp
        initialEventData={event}
        editMode={isEditing}
        saveEditMode={saveEditMode}
      />
    </button>
  );
};
export default AddEvent;
