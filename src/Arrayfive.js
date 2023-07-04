import {useState}  from "react";

import "./App.css"
 
const Arrayfive =()=>{
    const [Items , setItems] = useState
    (["iron", "sofa", "fan", "ac", "cooler" , "bulb"])
    const handleUpdatesItems =()=>{
        setItems(["lock", "key", "glass" , "plates" ,"tap"])
    };

    return(
        <>
<p>THE IMPORTANT ITEMS FOR HOUSEHOLD</p>
<ul>

{Items.map((v)=> {

return(
    <li> {v}</li>
)

})}


</ul>

<button onClick={() => handleUpdatesItems()} type ="button">
Update Items
</button> 
        

        </>
    )
}

 export default Arrayfive;