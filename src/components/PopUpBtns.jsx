

const PopUpBtns = ({saveClick, event, setEvent, description, time, place, deleting }) =>{

    const clickFunction = () => {
        saveClick()
        const updatedEvent = {
            ...event,
            description: description,
            time: time, 
            place: place
        }
        setEvent(updatedEvent)
    }
    return (
    <>
        <button onClick={deleting}>Delete</button>
        <button onClick={clickFunction}>Save</button>
    </>
    )}

export default PopUpBtns