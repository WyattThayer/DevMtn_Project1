import { useState } from "react";
import AddEvent from "./AddEvent";
import axios from "axios";

const DateRows = ({ initialEventData }) => {
  const [currentData, setCurrentData] = useState(initialEventData);

 
  const events = currentData.map((event) => {
    const {id} = currentData[0]
    console.log(id)
    return <AddEvent key={id} id={id} initialEvent={event} editMode={false} deleting={()=>deleteEvent(id)}/>;
  });

  const newEvent = async () => {
    
    const response = await axios.post("/addEvent", {
      description: "Description here",
      place: "Place",
      time: "12:00",
    });

    setCurrentData([...currentData, response.data]);
  };
  

  const deleteEvent = async (id) => {
    const response = await axios.delete(`/deleteEvent/${id}`);

    if (!response.data.error) {
      const filteredList = currentData.filter(
        (eventItem) => eventItem.id !== id
      );
      setCurrentData(filteredList);
    }
  };

  return (
    <div>
      <tr>
        {events}
        <button onClick={newEvent}>Add New Event</button>
      </tr>
    </div>
  );
};

export default DateRows;
