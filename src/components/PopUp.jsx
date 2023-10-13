import PopUpBtns from "./PopUpBtns"
import DescriptionCell from "./DescriptionCell"
import Place from "./PlaceCell"
import Time from "./TimeCell"

const PopUp = (runPop) => {
    return(
    <table>
            <tr>
            <td>
                <DescriptionCell/>
            </td>
            <td>
                <Place/>
            </td>
            <td>
                <Time/>
            </td>
        </tr>
        <tr>
            <PopUpBtns runPop={runPop}/>
        </tr>
    </table>
    )
}
export default PopUp