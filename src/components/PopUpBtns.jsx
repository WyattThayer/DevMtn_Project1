

const PopUpBtns = ({saveClick, event, setEvent, description, time, place, deleting }) =>{


    const clickFunction = () => {
        
        const updatedEvent = {
            ...event,
            description: description,
            time: time, 
            place: place
        }
        saveClick(updatedEvent)
        setEvent(updatedEvent)
    }
    return (
    <td>
        <button onClick={deleting}>Delete</button>
        <button onClick={clickFunction}>Save</button>
    </td>
    )}

export default PopUpBtns