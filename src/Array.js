import { useState } from "react";
import './App.css';


const Array  = ()=>{
const  [State, setstate] =useState
(["delhi", "mumbai", "bhopal", "goa", "kanpur"])
const handleUpdatesStates = ()=> {
setstate(["punjab","banaras", "gujrat","kerela"]);

};
return (
    <>
<p> THE famous cities of india </p>
<ul>
{State.map((v)=>{
    return(
        <>
            <li>{v}</li>
        </>
    )
})}
 
</ul>

<button onClick={() => handleUpdatesStates()} type ="button">
Update cities 
</button>
    </>
)
 
};
export default Array;