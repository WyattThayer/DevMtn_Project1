import { useState } from "react"
import PopUp from "./PopUp"
import axios from "axios"

const AddEvent = ({ initialEvent, editMode, deleting, id}) => {
    const [event, setEvent] = useState(initialEvent)
    const[isEditing, setIsEditing] = useState(editMode)
 console.log(event.id)

    const saveEditMode = async () => {

            let bodyObj ={
              description: event.description,
              place: event.place,
              time:event.time
            }
            console.log(event.description)
            const response = await axios.put(`/editEvent/${id}`, bodyObj)
        
            if (!response.data.error){
              setIsEditing(false) 
              setEvent({...event, ...bodyObj})
            }else{
              alert('something went wrong')
            }
          };

      const enterEditMode = () => setIsEditing(true)
    return isEditing ? (
    <button>
        <PopUp initialEventData={event} editMode={isEditing} saveEditMode={saveEditMode} setEvent={setEvent} deleted={deleting}/>
    </button>
    ):(
    <button onClick={enterEditMode}>Edit Event
        <PopUp 
            initialEventData={event}
            editMode={isEditing}
            saveEditMode={saveEditMode}
        />
        </button>
    )
}
export default AddEvent
