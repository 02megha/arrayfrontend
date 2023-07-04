import { useState } from "react" ;
import './App.css';
 const Arraytwo =()=> {
     const [Food , setfood] = useState
     (["daal", "roti", "dosa", "paneer","alloo"]);

     const handleUpdatesFood = () => {
        setfood (["chicken", "mutton", "fish", "egg"]);

     };

     return(
        <> 
        <p>TASTY Food</p>
        <ul>
         {Food.map((v) =>{

return(
   <> 
   <li>{v}</li>
   
   
   
   </>
)



         })}
        </ul>
        <button onClick={() => handleUpdatesFood()} type ="button">
Update FOOD 
</button> 
        
        </>
     )

 }
  export default Arraytwo ;
