import PopUpBtns from "./PopUpBtns";
import DescriptionCell from "./DescriptionCell";
import Place from "./PlaceCell";
import Time from "./TimeCell";
import { useState } from "react";

const PopUp = ({ editMode, initialEventData, saveEditMode, setEvent, deleted }) => {
  const [description, setDescription] = useState(initialEventData.description);
  const [place, setPlace] = useState(initialEventData.place);
  const [time, setTime] = useState(initialEventData.time);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <DescriptionCell
              editing={editMode}
              value={description}
              onValueChange={setDescription}
            />
          </td>
          <td>
            <Place value={place} editing={editMode} onValueChange={setPlace} />
          </td>
          <td>
            <Time value={time} editing={editMode} onValueChange={setTime} />
          </td>
        </tr>
        {editMode && (
          <tr>
            <PopUpBtns
              saveClick={saveEditMode}
              setEvent={setEvent}
              event={initialEventData}
              description={description}
              time={time}
              place={place}
              deleting={deleted}
            />
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PopUp;
