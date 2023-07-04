import {useState}  from "react";

import "./App.css"
 
const Arrayfour =()=>{
    const [Company , setCompany] = useState
    (["tata", "ntpc", "gail", "bhel","jio", "reliance", "infoses", "ultratech"])
    const handleUpdatesCompany =()=>{
        setCompany(["hundai", "honda", "scoda", "odi", "ecosports", "carnival" ,"mercidies"])
    };

    return(
        <>
<p>TOP BRANDS AND COMPANIEs</p>
<ul>

{Company.map((v)=> {

return(
    <li> {v}</li>
)

})}


</ul>

<button onClick={() => handleUpdatesCompany()} type ="button">
Update Branda & COMPANIEs
</button> 
        

        </>
    )
}

 export default Arrayfour;