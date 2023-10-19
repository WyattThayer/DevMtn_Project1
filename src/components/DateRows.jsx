import { useState } from "react";
import AddEvent from "./AddEvent";
import axios from "axios";

const DateRows = ({ initialEventData }) => {
  const [currentData, setCurrentData] = useState(initialEventData);

 const deleteEvent = async (id) => {
    const response = await axios.delete(`/deleteEvent/${id}`);

    if (!response.data.error) {
      const filteredList = currentData.filter(
        (eventItem) => eventItem.id !== id
      );
      setCurrentData(filteredList);
    }
  };
  
    const newEvent = async () => {
    
    const response = await axios.post("/addEvent", {
      description: "Description here",
      place: "Place",
      time: "12:00",
    });

    setCurrentData([...currentData, response.data]);
  };
  const events = currentData.map((event) => {
    const {id} = event
    return <AddEvent key={id} id={id} initialEvent={event} editMode={false} deleting={()=>deleteEvent(id)}/>;
  });


  

  

  return (
      <tr>
        <td>
          <button onClick={newEvent}>Add New Event</button>
          {events}
        </td>
      </tr>
  );
};

export default DateRows;
