let TestData = [
    {id:0, description: "dinner with ben", place: "park", time: "12:00pm"}
]



const handlerFunctions = {

 getEvent:(req,res)=>{
    res.send(TestData)
 }


}


export default handlerFunctions