
const Place = ({editing,value,onValueChange})=>{
    return editing ?(<>
        <input type="text" value={value} onChange={(e)=>onValueChange(e.target.value)}></input>
        </>
    ) : (
        <div>{value}</div>
    )
}
export default Place